/*
  RISE THE BRAND: store settings and products.
  Edit this file to change prices, stock, copy or images.
  Every page reads from here, so a change shows up everywhere.
*/

export const settings = {
  currency: "R",

  // Until the payment gateway is connected, orders are sent by email to this inbox.
  orderEmail: "info@risethebrand.co.za",

  // Distributor and reseller applications are sent to this inbox.
  tradeEmail: "info@risethebrand.co.za",

  // When the payment gateway is ready, add its checkout link here.
  checkoutUrl: "",

  // Shown under the price as "Or 4 easy payments of ...". Set to 0 to hide it.
  installments: 4,

  hours: "Monday to Friday, 8 a.m. to 5 p.m.",

  socials: {
    instagram: "#",
    facebook: "#",
    tiktok: "#",
  },
};

export const products = [
  {
    id: "multi-purpose-cleaner",
    name: "Multi Purpose Cleaner",
    shortName: "Multi Purpose",
    category: "All surfaces",
    size: "750 ml",
    price: 29.17,
    rating: 4.8, // set to null to hide the stars
    purchased: 124, // set to null to hide the purchase count
    stock: 40,
    badge: "Best Seller", // set to null to hide the badge
    // Three sizes of the same photo: the browser picks the sharpest one the screen needs
    image: "images/products/multi-purpose-cleaner-large.webp",
    imageSet: "images/products/multi-purpose-cleaner-medium.webp 415w, images/products/multi-purpose-cleaner-large.webp 830w",
    thumb: "images/products/multi-purpose-cleaner-thumb.webp",
    // How tall the bottle appears next to the other products (1 is the tallest)
    scale: 1,
    ghost: "750",
    summary:
      "One spray for counters, tiles, sinks and appliances. Lifts everyday grease and grime so the whole home feels fresh.",
    steps: [
      { title: "Spray", text: "Hold the bottle about 20 cm from the surface and spray evenly." },
      { title: "Wait", text: "On stubborn marks, leave it for a minute to loosen the grime." },
      { title: "Wipe", text: "Wipe clean with a damp cloth and let the surface dry." },
    ],
    howToUse: [
      "Spray directly onto the surface from about 20 cm away, then wipe with a clean, damp cloth.",
      "For stubborn marks, leave the spray on for one minute before wiping. Rinse surfaces that touch food with clean water afterwards.",
      "On wood, natural stone or delicate finishes, test a small hidden area first. Turn the nozzle to off and store the bottle upright when you are done.",
    ],
    benefit: [
      "Lifts grease, grime and fingerprints from most hard surfaces around the home.",
      "Works on kitchen counters, tiles, sinks, stovetops, appliances and bathroom fittings, so one bottle does the work of several.",
      "Leaves surfaces looking clean and smelling fresh, without a sticky film.",
    ],
    ingredients: [
      "Water, surfactants, cleaning agents, preservative, fragrance, colourant.",
      "Keep out of reach of children. Avoid contact with eyes. If contact occurs, rinse well with water. If swallowed, seek medical advice immediately and show this label.",
    ],
  },
  {
    id: "dishwashing-liquid",
    name: "Dishwashing Liquid",
    shortName: "Dishwashing",
    category: "Kitchen",
    size: "750 ml",
    price: 27.5,
    rating: 4.8,
    purchased: null,
    stock: 40,
    badge: "New",
    image: "images/products/dishwashing-liquid-large.webp",
    imageSet: "images/products/dishwashing-liquid-medium.webp 401w, images/products/dishwashing-liquid-large.webp 801w",
    thumb: "images/products/dishwashing-liquid-thumb.webp",
    scale: 0.95,
    ghost: "750",
    summary:
      "A concentrated lemon dishwashing liquid. Cuts through oil and baked on food, and keeps its foam to the end of the sink.",
    steps: [
      { title: "Pour", text: "Add a small squeeze to a sink of warm water, or straight onto a wet sponge." },
      { title: "Wash", text: "Work through glasses first, then plates, then pots and pans." },
      { title: "Rinse", text: "Rinse with clean water and leave everything to drain dry." },
    ],
    howToUse: [
      "Add a small squeeze to a sink of warm water, or put it straight onto a wet sponge for a single pan.",
      "Wash glassware first, then plates and cutlery, then pots and pans, so the water stays clean for longer.",
      "For baked on food, fill the dish with warm water and a squeeze of liquid and leave it to soak for ten minutes before washing. Rinse everything with clean water.",
    ],
    benefit: [
      "Concentrated formula, so a small squeeze washes a full sink of dishes.",
      "Cuts through cooking oil, grease and baked on food without endless scrubbing.",
      "Keeps its foam to the end of the sink, and rinses off cleanly with no film on glassware.",
    ],
    ingredients: [
      "Water, surfactants, foam stabiliser, salt, preservative, fragrance, colourant.",
      "Keep out of reach of children. Avoid contact with eyes. If contact occurs, rinse well with water. If swallowed, seek medical advice immediately and show this label.",
    ],
  },
  {
    id: "pine-gel",
    name: "Pine Gel",
    shortName: "Pine Gel",
    category: "Floors",
    size: "1 L",
    price: 37.5,
    rating: 4.9,
    purchased: null,
    stock: 40,
    badge: "New",
    image: "images/products/pine-gel-large.webp",
    imageSet: "images/products/pine-gel-medium.webp 1340w, images/products/pine-gel-large.webp 2681w",
    thumb: "images/products/pine-gel-thumb.webp",
    scale: 0.42,
    ghost: "1L",
    summary:
      "A thick pine gel for floors, walls and bins. Dilute it in a bucket for everyday mopping, or use it neat on the jobs that need more.",
    steps: [
      { title: "Scoop", text: "Add two tablespoons of gel to five litres of warm water." },
      { title: "Mop", text: "Mop the floor as usual, working from the far corner back to the door." },
      { title: "Dry", text: "Let the floor air dry. There is no need to rinse." },
    ],
    howToUse: [
      "For everyday mopping, stir two tablespoons of gel into five litres of warm water and mop as usual. There is no need to rinse.",
      "For heavy dirt, bins and outside areas, use the gel neat on a damp cloth or brush, leave it for a few minutes, then rinse with clean water.",
      "On sealed wood, laminate or natural stone, test a small hidden area first and keep the mop well wrung out. Close the tub firmly after use.",
    ],
    benefit: [
      "One tub goes a long way, because two tablespoons cleans a full bucket of water.",
      "Lifts oil, mud and ground in dirt from tiles, concrete, stoeps and painted walls.",
      "Leaves the clean pine scent that says the whole house has been done.",
    ],
    ingredients: [
      "Water, pine oil, surfactants, thickener, preservative, colourant.",
      "Keep out of reach of children. Avoid contact with eyes. If contact occurs, rinse well with water. If swallowed, seek medical advice immediately and show this label.",
    ],
  },
  {
    id: "footwear-cleaner",
    name: "Footwear Cleaner",
    shortName: "Footwear",
    category: "Shoe care",
    size: "200 ml",
    price: 89,
    rating: 4.7,
    purchased: 86,
    stock: 32,
    badge: null,
    image: "images/products/footwear-cleaner-large.webp",
    imageSet: "images/products/footwear-cleaner-medium.webp 290w, images/products/footwear-cleaner-large.webp 581w",
    thumb: "images/products/footwear-cleaner-thumb.webp",
    scale: 0.7,
    ghost: "200",
    summary:
      "A foaming cleaner for sneakers and everyday shoes. Pump, scrub and wipe to bring back that fresh out of the box look.",
    steps: [
      { title: "Pump", text: "Press the pump to release foam onto a soft brush or damp cloth." },
      { title: "Scrub", text: "Work the foam over uppers, midsoles and laces in small circles." },
      { title: "Wipe", text: "Wipe away the foam and dirt, then let your shoes air dry." },
    ],
    howToUse: [
      "Press the pump to release foam onto a soft brush or a damp cloth.",
      "Scrub the dirty areas in small circles, working over the uppers, midsoles and laces.",
      "Wipe away the foam and dirt with a clean, damp cloth and let your shoes air dry. Test a small hidden area first, especially on suede, nubuck or delicate materials.",
    ],
    benefit: [
      "Rich foam lifts dirt and scuffs from sneakers and everyday shoes.",
      "Cleans the surface without soaking your shoes, so they dry faster.",
      "The compact 200 ml bottle fits easily in a cupboard, drawer or gym bag.",
    ],
    ingredients: [
      "Water, surfactants, foaming agents, preservative, fragrance.",
      "Keep out of reach of children. Avoid contact with eyes. If contact occurs, rinse well with water. If swallowed, seek medical advice immediately and show this label.",
    ],
  },
];

// Anything genuinely not on sale yet. The rest of the range is on the trade
// rate sheets, so it is not "coming soon".
export const comingSoon = [];

/*
  TRADE RATES
  The two price lists on the Trade page.

  Each row is:
    code     product code from the rate sheet
    product  product name
    pack     how many units are in a case
    unit     price of one unit when you take the full case
    bulk     price of the full case
    courier  a number, or a list of named options such as Pudo and Doorstep
    total    a number, or a matching list

  Courier is charged per order, not per unit.
  Change a price here and it updates the table, the cards and the print view.
*/
export const tradeRates = {
  reseller: {
    id: "reseller",
    title: "Reseller product rates",
    blurb:
      "For shops, salons, spaza traders and anyone buying Rise stock to sell on. Order by the case.",
    note: "Surcharges apply for high risk and grey areas. We recommend Pudo or Pargo for deliveries in those areas, to avoid delays and extra costs.",
    rows: [
      { code: "P001", product: "Rise Multipurpose Cleaner", pack: "12 x 750 ml", unit: 42.5, bulk: 510, courier: 170, total: 680 },
      { code: "P002", product: "Dishwashing Liquid", pack: "10 x 1 L", unit: 30, bulk: 300, courier: 170, total: 470 },
      { code: "P003", product: "Thick Bleach", pack: "10 x 1 L", unit: 30, bulk: 300, courier: 170, total: 470 },
      { code: "P004", product: "Pine Gel", pack: "10 x 1 kg", unit: 40, bulk: 400, courier: 170, total: 570 },
      {
        code: "P005",
        product: "Cockroach Killer",
        pack: "10 x 50 ml",
        unit: 40,
        bulk: 400,
        courier: [
          { label: "Pudo", amount: 50 },
          { label: "Doorstep", amount: 135 },
        ],
        total: [
          { label: "Pudo", amount: 450 },
          { label: "Doorstep", amount: 535 },
        ],
      },
      {
        code: "P006",
        product: "Potshiner",
        pack: "10 x 100 ml",
        unit: 18,
        bulk: 180,
        courier: [
          { label: "Pudo", amount: 100 },
          { label: "Doorstep", amount: 135 },
        ],
        total: [
          { label: "Pudo", amount: 280 },
          { label: "Doorstep", amount: 315 },
        ],
      },
      { code: "P007", product: "Air Freshener", pack: "6 x 350 ml", unit: 25, bulk: 150, courier: 170, total: 320 },
    ],
  },

  distributor: {
    id: "distributor",
    title: "Distributor product rates",
    blurb:
      "For distributors carrying Rise across an area. Lower unit costs than the reseller list, plus commission on every item you move.",
    note: "Commission is R25 per item on all detergents except the Multipurpose Cleaner.",
    rows: [
      { code: "P001", product: "Rise Multipurpose Cleaner", pack: "12 x 750 ml", unit: 29.17, bulk: 350, courier: 170, total: 520 },
      { code: "P002", product: "Dishwashing Liquid", pack: "10 x 1 L", unit: 27.5, bulk: 275, courier: 170, total: 445 },
      { code: "P003", product: "Thick Bleach", pack: "10 x 1 L", unit: 27.5, bulk: 275, courier: 170, total: 445 },
      { code: "P004", product: "Pine Gel", pack: "10 x 1 kg", unit: 37.5, bulk: 375, courier: 170, total: 545 },
      { code: "P005", product: "Air Freshener", pack: "6 x 350 ml", unit: 25, bulk: 150, courier: 170, total: 320 },
    ],
  },
};

// The two things a trade applicant picks between on the sign up form.
export const tradeTypes = [
  {
    value: "Distributor",
    label: "Distributor",
    detail: "Carry the full range across an area, at distributor rates, and earn commission per item.",
  },
  {
    value: "Reseller",
    label: "Reseller",
    detail: "Buy stock by the case at reseller rates and sell it through your own shop or channels.",
  },
];

export const returnPolicy = [
  "Unopened products can be returned within 30 days of delivery for a full refund.",
  "If your order arrives damaged or incorrect, contact us within 7 days of delivery and we will replace it at no cost to you.",
  "Opened products can be returned if they are faulty. Refunds go back to your original payment method within 7 working days of us receiving the return.",
  "This policy does not affect your rights under the Consumer Protection Act.",
];

export const provinces = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];

export const findProduct = (id) => products.find((p) => p.id === id);

export const money = (n) =>
  settings.currency + (Number.isInteger(n) ? n : n.toFixed(2));
