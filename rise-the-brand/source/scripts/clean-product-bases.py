import os
import glob
import numpy as np
from PIL import Image
from scipy.ndimage import label, binary_fill_holes

def clean_product_image(large_path):
    # Load original master image
    img = Image.open(large_path).convert("RGBA")
    arr = np.array(img).copy()
    h, w, _ = arr.shape

    # Only inspect the bottom sixth of the image
    bottom_start = h * 5 // 6
    bottom_arr = arr[bottom_start:, :, :]

    r = bottom_arr[:, :, 0].astype(float)
    g = bottom_arr[:, :, 1].astype(float)
    b = bottom_arr[:, :, 2].astype(float)
    a = bottom_arr[:, :, 3].astype(float)

    min_rgb = np.minimum(np.minimum(r, g), b)
    max_rgb = np.maximum(np.maximum(r, g), b)
    diff_rgb = max_rgb - min_rgb

    # Identify pale / white studio reflection pixels
    is_pale = (min_rgb > 125) & (diff_rgb < 45) & (a > 5)
    is_bg = (a <= 15)

    # Seed flood-fill from background & image border pixels in the bottom region
    edge_mask = np.zeros((h - bottom_start, w), dtype=bool)
    edge_mask[-1, :] = True
    edge_mask[:, 0] = True
    edge_mask[:, -1] = True

    seed = is_bg | (edge_mask & (is_pale | (a < 100)))
    mask_passable = is_bg | is_pale

    # Connected component labeling to remove reflection connected to empty space
    labeled, _ = label(mask_passable)
    bg_labels = set(labeled[seed])
    bg_labels.discard(0)

    remove_mask = np.isin(labeled, list(bg_labels)) & is_pale

    # Put back small enclosed gaps (e.g., text counter-spaces)
    preserved_mask = ~remove_mask & (a > 10)
    filled_preserved = binary_fill_holes(preserved_mask)
    holes_to_restore = filled_preserved & ~preserved_mask
    remove_mask[holes_to_restore] = False

    # Apply alpha removal to cleaned array
    arr_bottom_alpha = arr[bottom_start:, :, 3]
    arr_bottom_alpha[remove_mask] = 0

    # Crop tight bounding box around non-transparent pixels
    non_zero_y, non_zero_x = np.where(arr[:, :, 3] > 10)
    xmin, xmax = non_zero_x.min(), non_zero_x.max()
    ymin, ymax = non_zero_y.min(), non_zero_y.max()

    cleaned_master = Image.fromarray(arr).crop((xmin, ymin, xmax + 1, ymax + 1))
    new_w, new_h = cleaned_master.size

    # Base directory and product name
    base_dir = os.path.dirname(large_path)
    base_name = os.path.basename(large_path).replace("-large.webp", "")

    # Save cleaned large master
    large_out_path = os.path.join(base_dir, f"{base_name}-large.webp")
    cleaned_master.save(large_out_path, format="WEBP", quality=95)
    print(f"{base_name}-large.webp: width {new_w}px (height {new_h}px)")

    # Save medium version (50% scale)
    med_w = round(new_w * 0.5)
    med_h = round(new_h * 0.5)
    medium_img = cleaned_master.resize((med_w, med_h), Image.Resampling.LANCZOS)
    medium_out_path = os.path.join(base_dir, f"{base_name}-medium.webp")
    medium_img.save(medium_out_path, format="WEBP", quality=92)
    print(f"{base_name}-medium.webp: width {med_w}px (height {med_h}px)")

    # Save thumb version (15% scale)
    thumb_w = round(new_w * 0.15)
    thumb_h = round(new_h * 0.15)
    thumb_img = cleaned_master.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
    thumb_out_path = os.path.join(base_dir, f"{base_name}-thumb.webp")
    thumb_img.save(thumb_out_path, format="WEBP", quality=90)
    print(f"{base_name}-thumb.webp: width {thumb_w}px (height {thumb_h}px)")

    return {
        "id": base_name,
        "large_width": new_w,
        "medium_width": med_w,
        "thumb_width": thumb_w,
    }

def main():
    products_dir = os.path.join(os.path.dirname(__file__), "..", "public", "images", "products")
    large_files = sorted(glob.glob(os.path.join(products_dir, "*-large.webp")))

    if not large_files:
        print("No *-large.webp files found in", products_dir)
        return

    results = []
    for filepath in large_files:
        res = clean_product_image(filepath)
        results.append(res)

    print("\n--- Summary of New Widths ---")
    for r in results:
        print(f"{r['id']}: medium = {r['medium_width']}w, large = {r['large_width']}w (thumb = {r['thumb_width']}px)")

if __name__ == "__main__":
    main()
