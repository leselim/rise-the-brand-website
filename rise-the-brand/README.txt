RISE THE BRAND WEBSITE (React)

SCREENS
Tested on small phones (320 pixels wide), standard phones, phones turned sideways,
iPad portrait and landscape, laptops, and monitors up to 2560 pixels wide.

WHICH FOLDER IS THE LIVE SITE
The live site is built from  rise-the-brand/source  and nothing else.
Pushing to main builds that folder and deploys it to risethebrand.co.za
automatically (.github/workflows), then checks the live page really changed.

Two other folders in this repo are NOT served and editing them changes nothing:
  rise-the-brand/website/   an old prebuilt copy, kept only for reference
  src/ at the repo root     the old brochure site
The deploy pipeline will reject a push that only touches those, on purpose.

THE SOURCE CODE
The "source" folder is the React project. All changes go here.
1. Install Node.js from nodejs.org (version 20 or newer).
2. Open a terminal in the "source" folder and run:  npm install
3. Run  npm run dev  to work on the site with live preview.
4. Run  npm run build  to create a new upload ready version in source/dist.
   Upload that dist folder to your host.

CHANGING PRODUCTS, PRICES AND COPY
Everything about the products lives in source/src/data/store.js:
names, prices, sizes, stock, ratings, badges, the three steps,
How to use, Benefit, Ingredients, the Return Policy and your contact email.

TRADE RATES
The reseller and distributor price lists are in the same file, under
"tradeRates". Each row carries the unit price, the full case price, the
courier fee and the total. Rows where courier differs by method (Pudo or
Doorstep) hold a short list instead of a single number.
Change a price there and the Trade page, its tables and the print view
all follow. The page is at /trade and the application form is at the
bottom of it; applications are emailed to "tradeEmail" in settings.

The four products on the shop currently use the DISTRIBUTOR unit prices.
If the shop should show retail prices instead, change "price" on each
product in store.js. Nothing else needs to change.

PRODUCT PHOTOS
Photos must have a transparent background, with the studio shadow removed.
The site stands each product on its own soft floor shadow, so a baked in one
shows up twice.
Cutting these out needs care: white lids and white spray triggers are almost
the same brightness as a white studio backdrop. Anything that removes the
backdrop by "spreading" from the edge of the photo will find one weak pixel on
the rim of a lid and erase the whole lid. Cut by brightness instead and then
fill the enclosed gaps, so a bright highlight in the middle of a lid comes
back.
Each photo comes in three sizes in source/public/images/products/:
  large   2400 pixels tall, used on retina screens and for the zoom
  medium  1200 pixels tall, used on phones and standard screens
  thumb    360 pixels tall, used in the menu, cart and checkout
The browser picks the right size automatically, so phones never download more than they need.

To change a photo, replace all three files with transparent background WebP or PNG images
at those heights, keeping the same names. THEN bump "photoVersion" by one at the
top of store.js. The build renames scripts and stylesheets automatically, but it
copies pictures across unchanged, so without that bump anyone who has visited
the site before keeps seeing the old photo. If a new picture does not appear,
this is almost always why. If the new photo is a different shape,
update the widths written in imageSet in store.js.
The "scale" value in store.js controls how tall each bottle looks next to the other.

For the sharpest possible result, ask your designer for the original high resolution
packaging files. The current Multi Purpose Cleaner photo was enlarged from a smaller image,
so its label can only be as crisp as that original.

CHECKOUT
Until the payment gateway is connected, the checkout page sends the order
to the email address set as orderEmail in store.js.
When the gateway is ready, add its link to checkoutUrl in the same file.

BRAND
The product tile behind each photo was deepened from #ece7f2 to #e3daf0.
White lids were vanishing into the old, almost white tile. Same hue, just
enough contrast for white plastic to read. It is --tile in base.css.

Primary colour   #824dc1
Touch point      #688114
Font             Inter (Google Fonts)
Colours and sizes are set at the top of source/src/styles/base.css.

BEFORE LAUNCH, PLEASE CONFIRM
The Footwear Cleaner price. It is not on either trade rate sheet, so it is
  still at its old R89.
The Dishwashing Liquid size. The bottle reads 750ml, the rate sheets say 1L.
The Pine Gel size. The tub reads 1 Litre, the rate sheets say 1kg.
Whether the shop should show trade prices or retail prices (see above).
The "4 easy payments" line, which reads oddly next to a R29 product.
Prices, stock, star ratings and purchase counts (placeholders for now)
The "4 easy payments" line (set installments to 0 to hide it)
Ingredients and safety text, which must match your printed labels
Email address, opening hours and social media links
Delivery times, return policy, privacy and terms wording
