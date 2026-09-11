/*
  RISE THE BRAND: store settings and products.
  Edit this file to change prices, stock, copy or images.
  Every page reads from here, so a change shows up everywhere.
*/

export const settings = {
  currency: "R",

  // Until the payment gateway is connected, orders are sent by email to this inbox.
  orderEmail: "hello@risethebrand.co.za",

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
    price: 79,
    rating: 4.8, // set to null to hide the stars
    purchased: 124, // set to null to hide the purchase count
    stock: 40,
    badge: "Best Seller", // set to null to hide the badge
    // Three sizes of the same photo: the browser picks the sharpest one the screen needs
    image: "images/products/multi-purpose-cleaner-large.webp",
    imageSet: "images/products/multi-purpose-cleaner-medium.webp 424w, images/products/multi-purpose-cleaner-large.webp 847w",
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
    id: "footwear-cleaner",
    name: "Footwear Cleaner",
    shortName: "Footwear",
    category: "Shoe care",
    size: "200 ml",
    price: 89,
    rating: 4.7,
    purchased: 86,
    stock: 32,
    badge: "New",
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

export const comingSoon = ["Pine Gel", "Dishwashing Liquid"];

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
