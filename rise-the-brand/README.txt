RISE THE BRAND WEBSITE (React)

SCREENS
Tested on small phones (320 pixels wide), standard phones, phones turned sideways,
iPad portrait and landscape, laptops, and monitors up to 2560 pixels wide.

THE QUICK WAY
Open the "website" folder and double click index.html to view the site.
To go live, upload everything inside the "website" folder to your web host.
No setup is needed.

THE SOURCE CODE
The "source" folder is the React project, for making changes.
1. Install Node.js from nodejs.org (version 20 or newer).
2. Open a terminal in the "source" folder and run:  npm install
3. Run  npm run dev  to work on the site with live preview.
4. Run  npm run build  to create a new upload ready version in source/dist.
   Upload that dist folder to your host.

CHANGING PRODUCTS, PRICES AND COPY
Everything about the products lives in source/src/data/store.js:
names, prices, sizes, stock, ratings, badges, the three steps,
How to use, Benefit, Ingredients, the Return Policy and your contact email.

PRODUCT PHOTOS
Each photo comes in three sizes in source/public/images/products/:
  large   2400 pixels tall, used on retina screens and for the zoom
  medium  1200 pixels tall, used on phones and standard screens
  thumb    360 pixels tall, used in the menu, cart and checkout
The browser picks the right size automatically, so phones never download more than they need.

To change a photo, replace all three files with transparent background WebP or PNG images
at those heights, keeping the same names. If the new photo is a different shape,
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
Primary colour   #824dc1
Touch point      #688114
Font             Inter (Google Fonts)
Colours and sizes are set at the top of source/src/styles/base.css.

BEFORE LAUNCH, PLEASE CONFIRM
Prices, stock, star ratings and purchase counts (placeholders for now)
The "4 easy payments" line (set installments to 0 to hide it)
Ingredients and safety text, which must match your printed labels
Email address, opening hours and social media links
Delivery times, return policy, privacy and terms wording
