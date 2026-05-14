// src/mocks/grandConfig.ts
import type { SiteConfig, SiteProduct } from "@/types/site";

// ---- Image paths (/public/grand/) ----
const IMG_LOGO              = "/grand/GrandLogo.png";
const IMG_WOOD_BG           = "/grand/woodBackgorund.jpg";
const IMG_PEN               = "/grand/woodPen.jpg";
const IMG_PEN_2             = "/grand/pens2.png";
const IMG_POCKET_WATCH      = "/grand/pocketWatchFront.jpg";
const IMG_POCKET_WATCH_BACK = "/grand/pocketWatchBack.jpg";
const IMG_CANDLE_1          = "/grand/candleHolder1.jpg";
const IMG_CANDLE_2          = "/grand/candleHolder2.jpg";
const IMG_GLASS_1           = "/grand/stainedGlass1.jpg";
const IMG_GLASS_2           = "/grand/stainedGlass2.jpg";
const IMG_COASTER           = "/grand/stonecoaster.png";
const IMG_ULTRASOUND        = "/grand/ultrasound.jpg";
const IMG_ENGRAVING         = "/grand/woodEngraving.jpg";
const IMG_RACHEL           = "/grand/rachel.png";
const IMG_MEL        = "/grand/mel.jpg";


const PRODUCT_IMAGES: Record<string, { imageUrl?: string; extraImages?: { url: string; alt: string }[] }> = {
  "Hand-Turned Wood Pen":           { imageUrl: IMG_PEN,          extraImages: [{ url: IMG_PEN_2,             alt: "Wood pens collection" }] },
  "Wood Pocket Watch":              { imageUrl: IMG_POCKET_WATCH, extraImages: [{ url: IMG_POCKET_WATCH_BACK, alt: "Pocket watch reverse" }] },
  "Turned Wood Candle Holder":      { imageUrl: IMG_CANDLE_1,     extraImages: [{ url: IMG_CANDLE_2,          alt: "Candle holder pair" }] },
  "Custom Stained Glass Panel":     { imageUrl: IMG_GLASS_1,      extraImages: [{ url: IMG_GLASS_2,           alt: "Stained glass detail" }] },
  "Engraved Stone Coaster Set":     { imageUrl: IMG_COASTER },
  "Ultrasound Photo Engraving":     { imageUrl: IMG_ULTRASOUND },
  "Engraved Wood Plaque":           { imageUrl: IMG_ENGRAVING },
  "Custom Lathe Project":           { imageUrl: IMG_PEN },
  "Custom Stained Glass Commission":{ imageUrl: IMG_GLASS_1,      extraImages: [{ url: IMG_GLASS_2, alt: "Stained glass work" }] },
};

// ======================
// PRODUCT DATA
// ======================

type SizeKey = "S" | "M" | "L";

const SIZE_LABEL: Record<SizeKey, string> = {
  S: "Standard",
  M: "Deluxe",
  L: "Premium",
};

function buildSizeProducts(args: {
  categorySlug: string;
  categoryBadge: string;
  baseIndex: number;
  name: string;
  subtitle?: string;
  summary?: string;
  prices: Record<SizeKey, number>;
  imageUrl?: string;
  extraImages?: { url: string; alt: string }[];
  features?: string[];
  badges?: string[];
}): SiteProduct {
  const {
    categorySlug,
    categoryBadge,
    baseIndex,
    name,
    subtitle,
    summary,
    prices,
    imageUrl,
    extraImages,
    features,
    badges,
  } = args;

  const allSamePrice =
    prices.S === prices.M && prices.M === prices.L;

  return {
    id: `gww-${categorySlug}-${baseIndex}`,
    name,
    subtitle,
    category: categoryBadge,
    price: prices.S,
    currency: "USD",
    thumbnailUrl: imageUrl ?? "",
    images: imageUrl
      ? [{ url: imageUrl, alt: name }, ...(extraImages ?? [])]
      : [],
    summary: summary ?? name,
    description: `${name}. Handcrafted by Mel Murray at Grand Wood Working.`,
    features: features ?? ["Handcrafted in the USA", "Made to order"],
    badges: badges ?? [categoryBadge],
    stock: "in_stock",
    ctaLabel: "Order Now",
    maxQuantity: 99,
    ...(allSamePrice
      ? {}
      : {
          options: [
            {
              label: "Size",
              optionItems: [
                { label: SIZE_LABEL.S, value: "S", order: 1, default: true, price: prices.S },
                { label: SIZE_LABEL.M, value: "M", order: 2, price: prices.M },
                { label: SIZE_LABEL.L, value: "L", order: 3, price: prices.L },
              ],
            },
          ],
        }),
  };
}

const PRODUCT_DATA = [
  // ── LATHE WORK ─────────────────────────────────────────────────────────────
  {
    title: "Lathe Work",
    categorySlug: "lathe",
    items: [
      {
        name: "Hand-Turned Wood Pen",
        subtitle: "Custom lathe-turned writing pen",
        summary: "A beautiful writing instrument turned on the lathe from select hardwoods. Makes a perfect gift.",
        prices: { S: 2500, M: 3500, L: 5000 },
        features: [
          "Turned from select hardwood",
          "Smooth lacquer finish",
          "Refillable ink cartridge included",
          "Gift box included",
        ],
        badges: ["Lathe Work", "Bestseller"],
      },
      {
        name: "Wood Pocket Watch",
        subtitle: "Lathe-turned wooden pocket watch",
        summary: "A stunning pocket watch with a hand-turned wooden case. A true conversation piece.",
        prices: { S: 7500, M: 9500, L: 12500 },
        features: [
          "Hand-turned hardwood case",
          "Quartz movement",
          "Polished finish",
          "Gift box included",
        ],
        badges: ["Lathe Work"],
      },
    //   {
    //     name: "Turned Wood Bowl",
    //     subtitle: "Hand-turned decorative or utility bowl",
    //     summary: "Elegant bowls turned from solid hardwood blanks. Each piece is one-of-a-kind.",
    //     prices: { S: 4500, M: 7500, L: 11000 },
    //     features: [
    //       "Turned from solid hardwood",
    //       "Food-safe finish available",
    //       "Every piece is unique",
    //     ],
    //     badges: ["Lathe Work"],
    //   },
    //   {
    //     name: "Wood Bottle Stopper",
    //     subtitle: "Lathe-turned decorative bottle stopper",
    //     summary: "Dress up your wine or spirits bottle with a beautifully turned hardwood stopper. Great as a gift.",
    //     prices: { S: 1800, M: 2500, L: 3200 },
    //     features: [
    //       "Turned hardwood top",
    //       "Stainless steel stopper insert",
    //       "Multiple wood species available",
    //     ],
    //     badges: ["Lathe Work"],
    //   },
    //   {
    //     name: "Wood Spinning Top",
    //     subtitle: "Classic hand-turned spinning top",
    //     summary: "A timeless toy and desk piece — perfectly balanced on the lathe for a long, satisfying spin.",
    //     prices: { S: 1500, M: 2000, L: 2800 },
    //     features: [
    //       "Precision-turned for balance",
    //       "Smooth lacquer finish",
    //       "Great for all ages",
    //     ],
    //     badges: ["Lathe Work"],
    //   },
      {
        name: "Turned Wood Candle Holder",
        subtitle: "Lathe-turned candlestick or taper holder",
        summary: "Add warmth to any space with a hand-turned wooden candle holder. Sold individually or as a pair.",
        prices: { S: 2000, M: 3500, L: 5500 },
        features: [
          "Turned from hardwood",
          "Fits standard taper or pillar candles",
          "Available as single or pair",
        ],
        badges: ["Lathe Work"],
      },
    ],
  },

  // ── STAINED GLASS ──────────────────────────────────────────────────────────
  {
    title: "Stained Glass",
    categorySlug: "stainedglass",
    items: [
    //   {
    //     name: "Navy Boat Stained Glass Panel",
    //     subtitle: "Nautical sailboat — our signature piece",
    //     summary: "Our most beloved piece — a classic navy sailboat rendered in rich stained glass. A stunning display for any window or wall.",
    //     prices: { S: 8500, M: 12500, L: 18000 },
    //     features: [
    //       "Hand-cut and leaded glass",
    //       "Signature Grand Wood Working design",
    //       "Hanging hardware included",
    //       "Made to order",
    //     ],
    //     badges: ["Stained Glass", "Fan Favorite"],
    //   },
    //   {
    //     name: "Tiger Stained Glass Panel",
    //     subtitle: "Our latest piece — bold tiger portrait",
    //     summary: "Our latest creation — a striking tiger portrait in vivid stained glass. A bold statement piece.",
    //     prices: { S: 9500, M: 14000, L: 20000 },
    //     features: [
    //       "Hand-cut and leaded glass",
    //       "Vibrant color palette",
    //       "Hanging hardware included",
    //       "Made to order",
    //     ],
    //     badges: ["Stained Glass", "New"],
    //   },
      {
        name: "Custom Stained Glass Panel",
        subtitle: "Your design, crafted in glass",
        summary: "Bring your vision to life. Submit a design idea and we'll craft a one-of-a-kind stained glass piece just for you.",
        prices: { S: 10000, M: 16000, L: 25000 },
        features: [
          "Fully custom design",
          "Consultation included",
          "Any theme: florals, animals, landscapes, portraits",
          "Hanging hardware included",
        ],
        badges: ["Stained Glass", "Custom"],
      },
    ],
  },

  // ── LASER ENGRAVING ────────────────────────────────────────────────────────
  {
    title: "Laser Engravings",
    categorySlug: "laserengraving",
    items: [
      {
        name: "Engraved Stone Coaster Set",
        subtitle: "Laser-engraved natural stone coasters",
        summary: "Personalize your space with laser-engraved stone coasters. Names, initials, logos, or any design — etched permanently into natural stone.",
        prices: { S: 2000, M: 3500, L: 5000 },
        features: [
          "Set of 4 coasters",
          "Natural stone material",
          "Custom text or image engraving",
          "Cork backing included",
        ],
        badges: ["Laser Engraving"],
      },
      {
        name: "Ultrasound Photo Engraving",
        subtitle: "Cherished moments etched in stone or wood",
        summary: "Preserve a precious memory forever. Mel can engrave ultrasound photos, portraits, or milestone images onto stone or wood — a deeply personal keepsake or gift.",
        prices: { S: 3500, M: 5500, L: 8000 },
        features: [
          "Engraved from your photo",
          "Stone or wood substrate available",
          "Ready to display or gift",
          "Truly one-of-a-kind keepsake",
        ],
        badges: ["Laser Engraving", "Keepsake"],
      },
      {
        name: "Engraved Wood Plaque",
        subtitle: "Custom laser-engraved wood plaque",
        summary: "Names, quotes, logos, or artwork — laser engraved onto a beautiful hardwood plaque. Perfect for awards, gifts, or home décor.",
        prices: { S: 2500, M: 4000, L: 6000 },
        features: [
          "Hardwood base",
          "Custom text or artwork",
          "Wall-mount hardware included",
          "Multiple wood species available",
        ],
        badges: ["Laser Engraving"],
      },
    //   {
    //     name: "Personalized Engraved Cutting Board",
    //     subtitle: "Laser-engraved hardwood cutting board",
    //     summary: "A functional and beautiful gift — personalized with names, a monogram, or a custom design engraved directly into the hardwood.",
    //     prices: { S: 3500, M: 5000, L: 7000 },
    //     features: [
    //       "Thick hardwood construction",
    //       "Food-safe finish",
    //       "Custom engraving on one or both sides",
    //       "Juice groove available on premium size",
    //     ],
    //     badges: ["Laser Engraving"],
    //   },
    ],
  },

  // ── CUSTOM ORDERS ──────────────────────────────────────────────────────────
  {
    title: "Custom Orders",
    categorySlug: "custom",
    items: [
      {
        name: "Custom Lathe Project",
        subtitle: "Have something specific in mind? Let's make it.",
        summary: "Don't see exactly what you need? Mel takes on custom lathe work requests — pens, bowls, handles, finials, and more.",
        prices: { S: 5000, M: 10000, L: 20000 },
        features: [
          "Consultation to discuss your idea",
          "Wide variety of wood species available",
          "Fully custom sizing and design",
          "Unique, one-of-a-kind piece",
        ],
        badges: ["Custom"],
      },
      {
        name: "Custom Stained Glass Commission",
        subtitle: "Your vision in glass",
        summary: "Commission a fully custom stained glass piece — any size, any subject. Rachel and Mel will work with you from concept to finished piece.",
        prices: { S: 12000, M: 20000, L: 35000 },
        features: [
          "Full design consultation",
          "Custom size and color palette",
          "Any subject: portraits, scenes, abstract",
          "Certificate of authenticity included",
        ],
        badges: ["Custom", "Stained Glass"],
      },
    ],
  },
] as const;

const shopProducts: SiteProduct[] = PRODUCT_DATA.flatMap((cat) =>
  cat.items.map((p, itemIdx) => {
    const imgs = PRODUCT_IMAGES[p.name] ?? {};
    return buildSizeProducts({
      categorySlug: cat.categorySlug,
      categoryBadge: cat.title,
      baseIndex: itemIdx + 1,
      name: p.name,
      subtitle: p.subtitle,
      summary: p.summary,
      prices: { ...p.prices },
      features: [...p.features],
      badges: [...p.badges],
      imageUrl: imgs.imageUrl,
      extraImages: imgs.extraImages,
    });
  })
);

// ======================
// CONTACT / SOCIAL
// ======================
const phoneHref = "tel:16302122625";
const emailAddress = "Mel.murray@yahoo.com";

// ======================
// SITE CONFIG
// ======================
export const mockSiteConfig: SiteConfig = {
  theme: {
    preset: "custom",
    radius: "lg",
    primary:  "#1A1612",   // Charcoal Black  — header, footer, key UI
    accent:   "#C07B2A",   // Amber Oak       — buttons, CTAs, highlights
    bg:       "#F0E6CC",   // Honey Grain     — hero / section backgrounds
    bg2:      "#FAF6EE",   // Pale Birch      — page bg, card surfaces
    fg:       "#E0D5C0",   // Linen           — borders, dividers
    muted:    "#5C4A2A",   // Dark Walnut     — subtext, captions
    text1:    "#1A1612",   // Charcoal Black  — main body text
    text2:    "#F5EDD6",   // Cream           — light text on dark backgrounds
    fontPair: "classic",
  },

  products: {
    showFilters: true,
    categoryOrder: [
      "Lathe Work",
      "Stained Glass",
      "Laser Engravings",
      "Custom Orders",
    ],
    items: shopProducts,
  },

  meta: {
    title: "Grand Wood Working — Custom Lathe Work & Stained Glass",
    description:
      "Grand Wood Working by Mel Murray. Hand-turned lathe work, custom stained glass panels, and laser engravings on wood and stone. Based in the Chicago suburbs.",
  },

  // ── Header ─────────────────────────────────────────────────────────────────
  showHeader: true,
  header: {
    id: "hdr",
    type: "header",
    logoText: "Grand | Wood Working",
    logoImage: IMG_LOGO,
    links: [
      { label: "Home", href: "#top" },
      { label: "Shop", href: "#shop" },
      { label: "Custom Work", href: "#custom-request" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Order Now", href: "#shop" },
    style: { sticky: true, blur: true, elevation: "sm", transparent: false },
  },

  settings: {
    payments: {
      cartActive: true,
      paymentType: "externalLink",
      externalPaymentUrl: "https://venmo.com", // update with Mel's Venmo
      supportEmail: emailAddress,
      supportPhone: {
        label: "Call Mel at (630) 212-2625",
        href: phoneHref,
      },
      taxes: {
        enabled: true,
        ratePercent: 10,
        taxShipping: false,
        defaultProductTaxable: true,
      },
      delivery: {
        enabled: true,
        type: "flat",
        flatFeeCents: 1000,
        mode: "both",
        addressCapture: {
          enabled: true,
          required: false,
        },
      },
      checkoutInputs: [
        {
          id: "customer-name",
          label: "Your Name",
          type: "text",
          required: true,
          placeholder: "Full name",
        },
        {
          id: "customer-phone",
          label: "Phone Number",
          type: "text",
          required: true,
          placeholder: "(630) 212-2625",
        },
        {
          id: "customer-email",
          label: "Email Address",
          type: "email",
          required: true,
          placeholder: "your@email.com",
        },
        {
          id: "special-instructions",
          label: "Special Instructions / Customization Notes",
          type: "textarea",
          placeholder: "Wood species preference, custom text, design details, etc.",
        },
      ],
    },
  },

  sections: [
    // ── HERO ────────────────────────────────────────────────────────────────
    {
      visible: true,
      id: "hero",
      type: "hero",
      eyebrow: "Grand Wood Working • Lathe Work • Stained Glass • Laser Engraving",
      title: "Handcrafted Wood Art & Custom Creations",
      subtitle:
        "Hand-turned lathe work, one-of-a-kind stained glass panels, and laser engravings on wood and stone. Every piece is made by hand by Mel Murray and his daughter Rachel.",
      imageUrl: IMG_LOGO,
      primaryCta: { label: "Shop Now", href: "#shop" },
      secondaryCta: { label: "Request Custom Work", href: "#custom-request" },
    },

    // ── SHOP ────────────────────────────────────────────────────────────────
    {
      visible: true,
      id: "shop",
      type: "productShop",
      title: "Shop Grand Wood Working",
      subtitle: "Lathe work, stained glass, and laser engravings — all handcrafted to order",
      bottomWaveType: "1-hill",
    },

    // ── WHAT WE MAKE ────────────────────────────────────────────────────────
    {
      topWaveType: "1-hill",
      visible: true,
      id: "what-we-make",
      type: "features",
      title: "What We Make",
      items: [
        {
          title: "Custom Lathe Work",
          body: "Hand-turned pens, pocket watches, bowls, bottle stoppers, and more — each piece shaped with care on the lathe from select hardwoods.",
        },
        {
          title: "Stained Glass Art",
          body: "From our signature navy sailboat to a bold tiger portrait, we craft one-of-a-kind stained glass panels for windows, walls, and gifts.",
        },
        {
          title: "Laser Engravings",
          body: "Personalized stone coasters, wood plaques, cutting boards, and photo engravings — including ultrasound photos etched into stone as a forever keepsake.",
        },
      ],
    },

    // ── CUSTOM REQUEST FORM ─────────────────────────────────────────────────
    {
      visible: true,
      id: "custom-request",
      type: "sendAMessage",
      title: "Request Custom Work",
      subtitle: "Have a specific idea in mind? Tell us about it.",
      description:
        "Mel and Rachel take on custom lathe projects, bespoke stained glass commissions, and personalized laser engravings. Fill out the form and Mel will follow up directly.",
      submission: {
        type: "resend",
        recipientEmail: emailAddress,
      },
      submitLabel: "Send My Request",
      successTitle: "Request received!",
      successMessage:
        "Thank you! Mel will review your request and reach out within 1–2 business days.",
      fields: [
        { id: "name", label: "Your Name", type: "text", placeholder: "Full name", required: true },
        { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
        { id: "phone", label: "Phone Number", type: "phone", placeholder: "(630) 000-0000" },
        {
          id: "project-type",
          label: "Project Type",
          type: "select",
          required: true,
          options: [
            "Custom Lathe Work",
            "Stained Glass Commission",
            "Laser Engraving",
            "Photo Engraving (Stone or Wood)",
            "Other",
          ],
        },
        {
          id: "details",
          label: "Project Details",
          type: "textarea",
          placeholder:
            "Describe your idea — wood species, size, design, any reference images you can send, etc.",
          required: true,
        },
        {
          id: "budget",
          label: "Approximate Budget",
          type: "text",
          placeholder: "e.g. $50–$200",
        },
      ],
    },

    // ── ABOUT ───────────────────────────────────────────────────────────────
    {
      visible: true,
      id: "about",
      type: "about",
      title: "About Grand Wood Working",
      body:
        "Grand Wood Working is a family craft business run by Mel Murray and his daughter Rachel, based in the Chicago suburbs. Mel has spent decades perfecting his craft on the lathe — turning beautiful pens, bowls, pocket watches, and decorative pieces from fine hardwoods. Rachel brings a creative eye to the stained glass side of the shop, crafting original panels from beloved subjects like the signature navy sailboat and bold tiger portrait. Together they also offer laser engravings on wood and stone — including deeply personal keepsakes like ultrasound photos etched permanently into stone.",
      align: "left",
    },

    // ── GALLERY ─────────────────────────────────────────────────────────────
    {
      visible: true,
      id: "gallery",
      type: "gallery",
      title: "Our Work",
      subtitle: "Lathe pieces, stained glass panels, and laser engravings",
      style: { columns: 4, rounded: "xl", gap: "md" },
      items: [
        { imageUrl: IMG_PEN,               alt: "Hand-turned wood pen" },
        { imageUrl: IMG_PEN_2,             alt: "Wood pens collection" },
        { imageUrl: IMG_POCKET_WATCH,      alt: "Lathe-turned pocket watch front" },
        { imageUrl: IMG_POCKET_WATCH_BACK, alt: "Lathe-turned pocket watch back" },
        { imageUrl: IMG_CANDLE_1,          alt: "Turned wood candle holder" },
        { imageUrl: IMG_CANDLE_2,          alt: "Candle holder pair" },
        { imageUrl: IMG_GLASS_1,           alt: "Stained glass panel" },
        { imageUrl: IMG_GLASS_2,           alt: "Stained glass detail" },
        { imageUrl: IMG_COASTER,           alt: "Laser-engraved stone coasters" },
        { imageUrl: IMG_ULTRASOUND,        alt: "Ultrasound photo engraved on stone" },
        { imageUrl: IMG_ENGRAVING,         alt: "Laser-engraved wood plaque" },
      ],
    },

    // ── MEET THE MAKERS ─────────────────────────────────────────────────────
    {
      visible: true,
      id: "team",
      type: "persons",
      title: "Meet the Makers",
      subtitle: "A father-daughter craft business built on a love of wood and glass",
      items: [
        {
          name: "Mel Murray",
          title: "Founder & Master Craftsman",
          description:
            "Mel has spent decades working the lathe, turning fine hardwoods into everything from writing pens to decorative bowls. He also handles laser engravings — including a deeply personal project etching his great-grandson's ultrasound photo onto stone.",
          badges: ["Lathe Work", "Laser Engraving"],
          avatarUrl: IMG_MEL,
        },
        {
          name: "Rachel Murray",
          title: "Stained Glass Artist",
          description:
            "Rachel brings color and life to every glass piece. From the beloved navy sailboat to the latest tiger portrait, she designs and hand-cuts each stained glass panel from scratch.",
          badges: ["Stained Glass"],
          avatarUrl: IMG_RACHEL,
        },
      ],
      style: {
        columns: 2,
        cardVariant: "default",
        rounded: "xl",
        align: "center",
      },
    },

    // ── CTA ─────────────────────────────────────────────────────────────────
    {
      visible: true,
      id: "cta",
      type: "cta",
      title: "Ready to order or have a custom idea?",
      body: "Call or text Mel directly — or fill out the custom request form above.",
      cta: { label: "Call (630) 212-2625", href: phoneHref },
    },

    // ── CONTACT ─────────────────────────────────────────────────────────────
    {
      visible: true,
      id: "contact",
      type: "contact",
      title: "Get In Touch",
      email: emailAddress,
      phone: { label: "(630) 212-2625", href: phoneHref },
      socials: [
        { label: "Email Mel", href: `mailto:${emailAddress}` },
      ],
      backgroundUrl: IMG_WOOD_BG,
    },

    // ── SHARE ───────────────────────────────────────────────────────────────
    {
      topWaveType: "1-hill",
      visible: true,
      id: "share",
      type: "share",
      title: "Share Grand Wood Working",
      subtitle: "Scan or send to a friend.",
      style: { variant: "band", align: "center", actions: true },
      items: [{ label: "grandwoodworking.com" }],
      backgroundClass: "bg-gradient-2-top",
      
    },
  ],

  // ── Footer ─────────────────────────────────────────────────────────────────
  showFooter: true,
  footer: {
    id: "ftr",
    type: "footer",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "Shop", href: "#shop" },
          { label: "Custom Work", href: "#custom-request" },
          { label: "About", href: "#about" },
          { label: "Gallery", href: "#gallery" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Shop",
        links: [
          { label: "Lathe Work", href: "#shop" },
          { label: "Stained Glass", href: "#shop" },
          { label: "Laser Engravings", href: "#shop" },
          { label: "Custom Orders", href: "#custom-request" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Mel.murray@yahoo.com", href: `mailto:${emailAddress}` },
          { label: "(630) 212-2625", href: phoneHref },
        ],
      },
    ],
    legal: "© 2025 Grand Wood Working. All rights reserved.",
  },
};