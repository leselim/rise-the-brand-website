"""
Remove the leftover studio reflection from the base of each product photo.

Every bottle was shot standing on a white sweep, which leaves a pale band of
reflection just under the base. On the dark hero that band shows up as a white
smear under the product. The site draws its own floor shadow (.bottle-floor),
so the baked in one is not wanted at all.

The band is pale AND colourless, while the base of every Rise product is
strongly coloured plastic, so the two are easy to tell apart. This only looks
at the bottom of each image, so nothing near a white lid is at risk.

It works on the -large file of each product and then rebuilds -medium and
-thumb from that one cleaned master, so all three stay in exact proportion.
Cleaning the three sizes separately would leave each with a slightly different
crop, and the site scales products by height, so they would no longer line up
next to each other.

Run from rise-the-brand/source:
    python3 scripts/clean-product-bases.py
"""
import pathlib
import sys

import numpy as np
from PIL import Image
from scipy import ndimage

IMAGES = pathlib.Path("public/images/products")
ZONE = 0.16        # only the bottom sixth of the picture
PALE_LUM = 140     # brighter than this
NEUTRAL_SAT = 70   # and this close to grey = reflection, not product
FEATHER = 1.2      # soften the new bottom edge
TEXT_MAX_W = 0.30  # an enclosed gap narrower than this much of the image
TEXT_MAX_H = 0.10  # and shorter than this much of it, is printed text
MIN_BASE_SAT = 55  # a base row greyer than this is reflection, not plastic
MAX_BASE_TRIM = 0.03  # never take more than this much off the bottom


SIZES = (("large", 2400), ("medium", 1200), ("thumb", 360))


def clean(path):
    im = Image.open(path).convert("RGBA")
    a = np.asarray(im).astype(np.int16)
    rgb, alpha = a[:, :, :3], a[:, :, 3].astype(np.float32)
    h = a.shape[0]

    lum = rgb.min(axis=2)
    sat = rgb.max(axis=2) - rgb.min(axis=2)

    zone = np.zeros(a.shape[:2], dtype=bool)
    zone[int(h * (1 - ZONE)):, :] = True

    pale = zone & (alpha > 0) & (lum > PALE_LUM) & (sat < NEUTRAL_SAT)
    if not pale.any():
        return 0, im

    # The volume printed on the label ("750ml", "1 Litre") is also pale and
    # colourless and also sits low on the bottle. The difference is that the
    # text is surrounded by coloured plastic, while the reflection runs out
    # into empty space. So drop the pale pixels, then fill any enclosed gap
    # straight back in, which returns the text and keeps the reflection gone.
    kept = (alpha > 0) & ~pale

    # Restore only SMALL enclosed gaps. Printed text is a few narrow glyphs;
    # a strip of reflection trapped under the base of a tub is wide and flat,
    # and filling that back in is what puts the smear straight back.
    holes = ndimage.binary_fill_holes(kept) & ~kept
    lab, n = ndimage.label(holes)
    for idx, sl in enumerate(ndimage.find_objects(lab), start=1):
        hh = sl[0].stop - sl[0].start
        ww = sl[1].stop - sl[1].start
        if ww < a.shape[1] * TEXT_MAX_W and hh < h * TEXT_MAX_H:
            kept |= lab == idx

    # The last rows where the base meets the reflection are a ragged mix of
    # plastic and backdrop, too coloured for the test above to catch but still
    # visibly pale. Walk up from the bottom and drop rows until one is clean.
    rows = np.where(kept.any(axis=1))[0]
    if len(rows):
        bottom = rows.max()
        limit = int(h * MAX_BASE_TRIM)
        while bottom > rows.min() and (rows.max() - bottom) < limit:
            row = kept[bottom]
            if not row.any():
                break
            # A row of the reflection is grey. A row of the product is the
            # colour of the plastic it is moulded from. Median saturation
            # tells them apart far more sharply than brightness does.
            if float(np.median(sat[bottom][row])) >= MIN_BASE_SAT:
                break
            kept[bottom] = False
            bottom -= 1

    removed = int(((alpha > 0) & ~kept).sum())
    alpha[~kept] = 0.0
    alpha = ndimage.gaussian_filter(alpha, FEATHER)

    out = Image.fromarray(np.dstack([rgb, alpha]).astype(np.uint8), "RGBA")

    # re-crop, since the picture is usually shorter now
    aa = np.asarray(out)[:, :, 3]
    ys, xs = np.where(aa > 6)
    out = out.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
    return removed, out


if __name__ == "__main__":
    if not IMAGES.is_dir():
        sys.exit(f"Run this from rise-the-brand/source. Not found: {IMAGES}")

    masters = sorted(IMAGES.glob("*-large.webp"))
    if not masters:
        sys.exit(f"No -large.webp masters in {IMAGES}")

    print("file                          removed px   rebuilt sizes")
    for master in masters:
        stem = master.name[: -len("-large.webp")]
        removed, cleaned = clean(master)
        built = []
        for label, height in SIZES:
            width = max(1, round(cleaned.width * height / cleaned.height))
            target = IMAGES / f"{stem}-{label}.webp"
            cleaned.resize((width, height), Image.LANCZOS).save(
                target, "WEBP", quality=90, method=6, exact=True
            )
            built.append(f"{width}x{height}")
        print(f"  {stem:26} {removed:9d}   {'  '.join(built)}")

    print("\nNow bump photoVersion in src/data/store.js and update the srcset")
    print("widths there to match the rebuilt sizes above.")
