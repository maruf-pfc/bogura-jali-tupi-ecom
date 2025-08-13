import { Product } from "@/interfaces/Product";
import { generateUniqueId } from "@/lib/helpers";

export const categories = [
  "সব ক্যাটেগরি",
  "ক্লাসিক",
  "প্রিমিয়াম",
  "হ্যান্ডমেড",
  "ডিজাইনার",
  "শিশুদের",
];

export const products: Product[] = [
  // =================================================================
  // Classic Category Products (ক্লাসিক)
  // =================================================================
  {
    id: generateUniqueId("classic"),
    name: {
      bn: "ঐতিহ্যবাহী সাদা জালি টুপি",
      en: "Traditional White Jali Tupi",
    },
    slug: "traditional-white-jali-tupi",
    description: {
      bn: "বগুড়ার ঐতিহ্যবাহী সাদা জালি টুপি, দৈনন্দিন ব্যবহারের জন্য উপযুক্ত।",
      en: "Traditional white Jali Tupi from Bogura, perfect for daily use.",
    },
    price: 350,
    categories: [{ bn: "ক্লাসিক", en: "Classic" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109178/01-min_kd22uu.png",
    availableQuantity: 50,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["S", "M", "L", "XL"],
    features: {
      bn: ["১০০% সুতি", "হালকা ও আরামদায়ক", "সহজে ধৌতযোগ্য"],
      en: ["100% Cotton", "Light & Comfortable", "Easy to wash"],
    },
    specifications: {
      material: { bn: "সুতি", en: "Cotton" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("classic"),
    name: { bn: "সলিড কালো ক্লাসিক টুপি", en: "Solid Black Classic Tupi" },
    slug: "solid-black-classic-tupi",
    description: {
      bn: "যেকোনো পোশাকের সাথে মানানসই একটি ক্লাসিক কালো টুপি।",
      en: "A classic black tupi that goes well with any attire.",
    },
    price: 380,
    categories: [{ bn: "ক্লাসিক", en: "Classic" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109177/02-min_ei9l16.png",
    availableQuantity: 45,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["M", "L", "XL"],
    features: {
      bn: ["গভীর কালো রঙ", "টেকসই ও মজবুত", "ফরমাল ও ক্যাজুয়াল"],
      en: ["Deep Black Color", "Durable & Strong", "Formal & Casual"],
    },
    specifications: {
      material: { bn: "কটন মিশ্রণ", en: "Cotton Blend" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("classic"),
    name: { bn: "নেভি ব্লু স্ট্রাইপড টুপি", en: "Navy Blue Striped Tupi" },
    slug: "navy-blue-striped-tupi",
    description: {
      bn: "নেভি ব্লু রঙের উপর হালকা স্ট্রাইপ ডিজাইন করা ক্লাসিক টুপি।",
      en: "A classic tupi with a light stripe design on a navy blue color.",
    },
    price: 400,
    categories: [
      { bn: "ক্লাসিক", en: "Classic" },
      { bn: "ডিজাইনার", en: "Designer" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109180/03-min_rhptym.png",
    availableQuantity: 30,
    isMostSelling: false,
    deliveryCharge: 60,
    availableSizes: ["L", "XL"],
    features: {
      bn: ["মার্জিত স্ট্রাইপ", "আরামদায়ক ফিটিং", "উন্নত মানের সুতা"],
      en: ["Elegant Stripes", "Comfortable Fit", "High-Quality Thread"],
    },
    specifications: {
      material: { bn: "সুতি", en: "Cotton" },
      origin: { bn: "কুমিল্লা, বাংলাদেশ", en: "Cumilla, Bangladesh" },
      care: { bn: "মেশিন ওয়াশ", en: "Machine Wash" },
    },
  },
  {
    id: generateUniqueId("classic"),
    name: { bn: "বেইজ রঙের প্লেইন টুপি", en: "Beige Plain Tupi" },
    slug: "beige-plain-tupi",
    description: {
      bn: "হালকা বেইজ রঙের একটি সাধারণ ও সুন্দর টুপি।",
      en: "A simple and beautiful tupi in a light beige color.",
    },
    price: 320,
    categories: [{ bn: "ক্লাসিক", en: "Classic" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109185/04-min_fvwhvo.png",
    availableQuantity: 60,
    isMostSelling: false,
    deliveryCharge: 60,
    availableSizes: ["S", "M", "L"],
    features: {
      bn: ["স্নিগ্ধ রঙ", "নরম কাপড়", "সারাদিন ব্যবহারের উপযোগী"],
      en: ["Sober Color", "Soft Fabric", "Suitable for all-day wear"],
    },
    specifications: {
      material: { bn: "ভয়েল কটন", en: "Voile Cotton" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("classic"),
    name: { bn: "ক্লাসিক হাতে বোনা টুপি", en: "Classic Hand-knitted Tupi" },
    slug: "classic-hand-knitted-tupi",
    description: {
      bn: "গ্রামীণ কারিগরদের হাতে বোনা একটি ক্লাসিক টুপি, যা ঐতিহ্য ও আধুনিকতার মিলন।",
      en: "A classic tupi hand-knitted by rural artisans, blending tradition and modernity.",
    },
    price: 480,
    categories: [
      { bn: "ক্লাসিক", en: "Classic" },
      { bn: "হ্যান্ডমেড", en: "Handmade" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109178/05-min_c597dp.png",
    availableQuantity: 25,
    isMostSelling: true,
    deliveryCharge: 70,
    availableSizes: ["M", "L"],
    features: {
      bn: ["সম্পূর্ণ হাতে বোনা", "অনন্য ডিজাইন", "শ্বাসপ্রশ্বাসযোগ্য"],
      en: ["Fully Hand-knitted", "Unique Design", "Breathable"],
    },
    specifications: {
      material: { bn: "খাদি কটন", en: "Khadi Cotton" },
      origin: { bn: "যশোর, বাংলাদেশ", en: "Jashore, Bangladesh" },
      care: { bn: "শুকনো পরিষ্কার", en: "Dry Clean" },
    },
  },

  // =================================================================
  // Premium Category Products (প্রিমিয়াম)
  // =================================================================
  {
    id: generateUniqueId("premium"),
    name: {
      bn: "প্রিমিয়াম সিল্ক এমব্রয়ডারি টুপি",
      en: "Premium Silk Embroidery Tupi",
    },
    slug: "premium-silk-embroidery-tupi",
    description: {
      bn: "সূক্ষ্ম সিল্ক সুতার এমব্রয়ডারি করা একটি বিলাসবহুল টুপি।",
      en: "A luxurious tupi with fine silk thread embroidery.",
    },
    price: 950,
    categories: [
      { bn: "প্রিমিয়াম", en: "Premium" },
      { bn: "বিশেষ অনুষ্ঠান", en: "Special Occasions" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109630/01-min_oftms6.png",
    availableQuantity: 20,
    isMostSelling: false,
    deliveryCharge: 80,
    availableSizes: ["M", "L"],
    features: {
      bn: ["রেশমি সুতার কাজ", "রাজকীয় ডিজাইন", "হালকা ওজন"],
      en: ["Silk Thread Work", "Royal Design", "Lightweight"],
    },
    specifications: {
      material: { bn: "সিল্ক ও কটন মিশ্রণ", en: "Silk & Cotton Blend" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "শুকনো পরিষ্কার", en: "Dry Clean" },
    },
  },
  {
    id: generateUniqueId("premium"),
    name: { bn: "মার্সারাইজড কটন টুপি", en: "Mercerized Cotton Tupi" },
    slug: "mercerized-cotton-tupi",
    description: {
      bn: "উজ্জ্বল ও মসৃণ মার্সারাইজড কটন দিয়ে তৈরি প্রিমিয়াম টুপি।",
      en: "A premium tupi made from shiny and smooth mercerized cotton.",
    },
    price: 750,
    categories: [{ bn: "প্রিমিয়াম", en: "Premium" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109628/02-min_xloezv.png",
    availableQuantity: 30,
    isMostSelling: false,
    deliveryCharge: 70,
    availableSizes: ["L", "XL"],
    features: {
      bn: ["চকচকে ভাব", "উন্নত মানের ফ্যাব্রিক", "দীর্ঘস্থায়ী রঙ"],
      en: ["Lustrous Finish", "High-Quality Fabric", "Long-lasting Color"],
    },
    specifications: {
      material: { bn: "মার্সারাইজড কটন", en: "Mercerized Cotton" },
      origin: { bn: "নারায়ণগঞ্জ, বাংলাদেশ", en: "Narayanganj, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("premium"),
    name: { bn: "গোল্ডেন জারি ওয়ার্ক টুপি", en: "Golden Zari Work Tupi" },
    slug: "golden-zari-work-tupi",
    description: {
      bn: "বিয়ে বা যেকোনো উৎসবের জন্য পারফেক্ট গোল্ডেন জারি কাজ করা টুপি।",
      en: "Tupi with golden zari work, perfect for weddings or any festival.",
    },
    price: 1200,
    categories: [
      { bn: "প্রিমিয়াম", en: "Premium" },
      { bn: "বিশেষ অনুষ্ঠান", en: "Special Occasions" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109635/03-min_ir9ula.png",
    availableQuantity: 15,
    isMostSelling: false,
    deliveryCharge: 100,
    availableSizes: ["M", "L", "XL"],
    features: {
      bn: ["জমকালো জারি কাজ", "বিলাসবহুল অনুভূতি", "উপহারের জন্য সেরা"],
      en: ["Rich Zari Work", "Luxurious Feel", "Best for Gifting"],
    },
    specifications: {
      material: { bn: "ভেলভেট ও কটন", en: "Velvet & Cotton" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "শুকনো পরিষ্কার", en: "Dry Clean" },
    },
  },
  {
    id: generateUniqueId("premium"),
    name: {
      bn: "অ্যারাবিয়ান ডিজাইন প্রিমিয়াম টুপি",
      en: "Arabian Design Premium Tupi",
    },
    slug: "arabian-design-premium-tupi",
    description: {
      bn: "আরবীয় স্থাপত্য দ্বারা অনুপ্রাণিত জটিল ডিজাইনের প্রিমিয়াম টুপি।",
      en: "Premium tupi with intricate designs inspired by Arabian architecture.",
    },
    price: 850,
    categories: [
      { bn: "প্রিমিয়াম", en: "Premium" },
      { bn: "ডিজাইনার", en: "Designer" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109629/04-min_gj1evx.png",
    availableQuantity: 22,
    isMostSelling: true,
    deliveryCharge: 80,
    availableSizes: ["L", "XL"],
    features: {
      bn: ["অনন্য আরবীয় ডিজাইন", "ঘন বুনন", "আভিজাত্যের প্রতীক"],
      en: ["Unique Arabian Design", "Dense Weave", "Symbol of Elegance"],
    },
    specifications: {
      material: { bn: "মিশরীয় কটন", en: "Egyptian Cotton" },
      origin: { bn: "আমদানিকৃত", en: "Imported" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("premium"),
    name: { bn: "রয়েল ব্লু ভেলভেট টুপি", en: "Royal Blue Velvet Tupi" },
    slug: "royal-blue-velvet-tupi",
    description: {
      bn: "রাজকীয় নীল রঙের ভেলভেট কাপড়ের টুপি, যা আপনাকে দেবে এক রাজকীয় চেহারা।",
      en: "A royal blue velvet tupi that gives you a majestic look.",
    },
    price: 1100,
    categories: [{ bn: "প্রিমিয়াম", en: "Premium" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109632/05-min_umdixw.png",
    availableQuantity: 18,
    isMostSelling: false,
    deliveryCharge: 90,
    availableSizes: ["M", "L"],
    features: {
      bn: [
        "নরম ভেলভেট ফ্যাব্রিক",
        "গভীর রাজকীয় নীল রঙ",
        "শীতের জন্য আরামদায়ক",
      ],
      en: [
        "Soft Velvet Fabric",
        "Deep Royal Blue Color",
        "Comfortable for Winter",
      ],
    },
    specifications: {
      material: { bn: "ভেলভেট", en: "Velvet" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "শুকনো পরিষ্কার", en: "Dry Clean" },
    },
  },

  // =================================================================
  // Handmade Category Products (হ্যান্ডমেড)
  // =================================================================
  {
    id: generateUniqueId("handmade"),
    name: {
      bn: "গ্রামীণ চেকের হ্যান্ডমেড টুপি",
      en: "Rural Checkered Handmade Tupi",
    },
    slug: "rural-checkered-handmade-tupi",
    description: {
      bn: "গ্রামের মহিলাদের হাতে তৈরি চেকের ডিজাইনের টুপি। প্রতিটি টুপিই স্বতন্ত্র।",
      en: "Checkered design tupi handmade by village women. Each piece is unique.",
    },
    price: 550,
    categories: [{ bn: "হ্যান্ডমেড", en: "Handmade" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755110126/01-min_wqgajn.png",
    availableQuantity: 30,
    isMostSelling: true,
    deliveryCharge: 70,
    availableSizes: ["S", "M", "L"],
    features: {
      bn: ["সম্পূর্ণ হাতে তৈরি", "অনন্য চেকার ডিজাইন", "টেকসই"],
      en: ["Fully Handmade", "Unique Checkered Design", "Durable"],
    },
    specifications: {
      material: { bn: "জামদানি সুতা", en: "Jamdani Thread" },
      origin: { bn: "টাঙ্গাইল, বাংলাদেশ", en: "Tangail, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("handmade"),
    name: {
      bn: "ফ্লোরাল হ্যান্ড পেইন্টেড টুপি",
      en: "Floral Hand-Painted Tupi",
    },
    slug: "floral-hand-painted-tupi",
    description: {
      bn: "দক্ষ শিল্পীর হাতে আঁকা ফ্লোরাল ডিজাইনের শৈল্পিক টুপি।",
      en: "An artistic tupi with a floral design hand-painted by a skilled artist.",
    },
    price: 650,
    categories: [
      { bn: "হ্যান্ডমেড", en: "Handmade" },
      { bn: "ডিজাইনার", en: "Designer" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755110124/02-min_psbgg6.png",
    availableQuantity: 15,
    isMostSelling: false,
    deliveryCharge: 70,
    availableSizes: ["M", "L"],
    features: {
      bn: ["হাতে আঁকা ডিজাইন", "একক ও অনন্য", "পরিবেশ বান্ধব রঙ"],
      en: ["Hand-Painted Design", "One of a kind", "Eco-friendly Colors"],
    },
    specifications: {
      material: { bn: "ক্যানভাস কটন", en: "Canvas Cotton" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "হালকা হাতে ধোয়া", en: "Gentle Hand Wash" },
    },
  },
  {
    id: generateUniqueId("handmade"),
    name: { bn: "ক্রোশেট বোনা জালি টুপি", en: "Crochet Knitted Jali Tupi" },
    slug: "crochet-knitted-jali-tupi",
    description: {
      bn: "ক্রোশেট কাঁটার নিপুণ হাতের কাজে তৈরি জালি টুপি।",
      en: "Jali tupi made with the fine handiwork of crochet knitting.",
    },
    price: 600,
    categories: [{ bn: "হ্যান্ডমেড", en: "Handmade" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755110127/03-min_coto9d.png",
    availableQuantity: 40,
    isMostSelling: true,
    deliveryCharge: 70,
    availableSizes: ["S", "M", "L", "XL"],
    features: {
      bn: ["নিপুণ ক্রোশেট কাজ", "বাতাস চলাচলযোগ্য", "নমনীয় ও আরামদায়ক"],
      en: ["Fine Crochet Work", "Breathable", "Flexible & Comfortable"],
    },
    specifications: {
      material: { bn: "কটন থ্রেড", en: "Cotton Thread" },
      origin: { bn: "রংপুর, বাংলাদেশ", en: "Rangpur, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("handmade"),
    name: {
      bn: "খাদি কাপড়ের ব্লক প্রিন্ট টুপি",
      en: "Khadi Block Print Tupi",
    },
    slug: "khadi-block-print-tupi",
    description: {
      bn: "হাতে তৈরি খাদি কাপড়ের উপর ঐতিহ্যবাহী ব্লক প্রিন্টের কাজ।",
      en: "Traditional block print work on hand-spun Khadi fabric.",
    },
    price: 580,
    categories: [
      { bn: "হ্যান্ডমেড", en: "Handmade" },
      { bn: "ক্লাসিক", en: "Classic" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755110130/04-min_bb7kma.png",
    availableQuantity: 28,
    isMostSelling: false,
    deliveryCharge: 60,
    availableSizes: ["L", "XL"],
    features: {
      bn: ["ঐতিহ্যবাহী ব্লক প্রিন্ট", "খাদি ফ্যাব্রিক", "পরিবেশ বান্ধব"],
      en: ["Traditional Block Print", "Khadi Fabric", "Eco-friendly"],
    },
    specifications: {
      material: { bn: "খাদি কটন", en: "Khadi Cotton" },
      origin: { bn: "কুমিল্লা, বাংলাদেশ", en: "Cumilla, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("handmade"),
    name: {
      bn: "চামড়ার কাজ করা হ্যান্ডমেড টুপি",
      en: "Handmade Tupi with Leather Work",
    },
    slug: "handmade-tupi-with-leather-work",
    description: {
      bn: "কটন টুপির উপর হাতে করা চামড়ার শৈল্পিক কাজ।",
      en: "Artistic leatherwork done by hand on a cotton tupi.",
    },
    price: 720,
    categories: [
      { bn: "হ্যান্ডমেড", en: "Handmade" },
      { bn: "ডিজাইনার", en: "Designer" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755110127/05-min_bhqqnb.png",
    availableQuantity: 12,
    isMostSelling: false,
    deliveryCharge: 80,
    availableSizes: ["M", "L"],
    features: {
      bn: ["চামড়ার ডিটেইলিং", "অনন্য সমন্বয়", "টেকসই ও মজবুত"],
      en: ["Leather Detailing", "Unique Combination", "Durable & Strong"],
    },
    specifications: {
      material: { bn: "কটন ও জেনুইন লেদার", en: "Cotton & Genuine Leather" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "শুধুমাত্র স্পট ক্লিন", en: "Spot Clean Only" },
    },
  },

  // =================================================================
  // Designer Category Products (ডিজাইনার)
  // =================================================================
  {
    id: generateUniqueId("designer"),
    name: {
      bn: "মডার্ন জিওমেট্রিক ডিজাইন টুপি",
      en: "Modern Geometric Design Tupi",
    },
    slug: "modern-geometric-design-tupi",
    description: {
      bn: "আধুনিক তরুণদের জন্য জিওমেট্রিক প্যাটার্নের ডিজাইনার টুপি।",
      en: "A designer tupi with geometric patterns for modern youth.",
    },
    price: 450,
    categories: [{ bn: "ডিজাইনার", en: "Designer" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109185/04-min_fvwhvo.png",
    availableQuantity: 50,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["M", "L"],
    features: {
      bn: ["ট্রেন্ডি ডিজাইন", "দুটি রঙের সমন্বয়", "আকর্ষণীয় লুক"],
      en: ["Trendy Design", "Two-tone color", "Attractive Look"],
    },
    specifications: {
      material: { bn: "পলিয়েস্টার কটন", en: "Polyester Cotton" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "মেশিন ওয়াশ", en: "Machine Wash" },
    },
  },
  {
    id: generateUniqueId("designer"),
    name: { bn: "গ্রাফিতি আর্ট টুপি", en: "Graffiti Art Tupi" },
    slug: "graffiti-art-tupi",
    description: {
      bn: "আরবান স্টাইলের গ্রাফিতি আর্ট দ্বারা অনুপ্রাণিত ডিজাইনার টুপি।",
      en: "Designer tupi inspired by urban style graffiti art.",
    },
    price: 520,
    categories: [{ bn: "ডিজাইনার", en: "Designer" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109180/03-min_rhptym.png",
    availableQuantity: 35,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["Free Size"],
    features: {
      bn: ["সাহসী ও রঙিন", "তরুণদের জন্য সেরা", "ক্যাজুয়াল স্টাইল"],
      en: ["Bold & Colorful", "Best for Youth", "Casual Style"],
    },
    specifications: {
      material: { bn: "ডেনিম কটন", en: "Denim Cotton" },
      origin: { bn: "চট্টগ্রাম, বাংলাদেশ", en: "Chattogram, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("designer"),
    name: { bn: "মিনিমালিস্ট ডিজাইনার টুপি", en: "Minimalist Designer Tupi" },
    slug: "minimalist-designer-tupi",
    description: {
      bn: "অতিরিক্ত কারুকাজ ছাড়া সাধারণ কিন্তু মার্জিত ডিজাইনের টুপি।",
      en: "A tupi with a simple yet elegant design, without excessive decoration.",
    },
    price: 480,
    categories: [
      { bn: "ডিজাইনার", en: "Designer" },
      { bn: "ক্লাসিক", en: "Classic" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109178/05-min_c597dp.png",
    availableQuantity: 40,
    isMostSelling: false,
    deliveryCharge: 60,
    availableSizes: ["S", "M", "L"],
    features: {
      bn: [
        "সাধারণ ও মার্জিত",
        "পরিষ্কার ফিনিশিং",
        "যেকোনো অনুষ্ঠানে ব্যবহারযোগ্য",
      ],
      en: ["Simple & Elegant", "Clean Finishing", "Suitable for any occasion"],
    },
    specifications: {
      material: { bn: "সুতি", en: "Cotton" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: generateUniqueId("designer"),
    name: { bn: "প্যাচওয়ার্ক ডিজাইন টুপি", en: "Patchwork Design Tupi" },
    slug: "patchwork-design-tupi",
    description: {
      bn: "বিভিন্ন কাপড়ের টুকরো দিয়ে তৈরি শৈল্পিক প্যাচওয়ার্ক টুপি।",
      en: "Artistic patchwork tupi made from different pieces of fabric.",
    },
    price: 620,
    categories: [
      { bn: "ডিজাইনার", en: "Designer" },
      { bn: "হ্যান্ডমেড", en: "Handmade" },
    ],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109178/01-min_kd22uu.png",
    availableQuantity: 20,
    isMostSelling: false,
    deliveryCharge: 70,
    availableSizes: ["M", "L"],
    features: {
      bn: ["বহু-রঙা প্যাচওয়ার্ক", "প্রতিটি টুপি অনন্য", "বোহেমিয়ান স্টাইল"],
      en: ["Multi-colored Patchwork", "Each piece is unique", "Bohemian Style"],
    },
    specifications: {
      material: { bn: "মিশ্র ফ্যাব্রিক", en: "Mixed Fabric" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "হালকা হাতে ধোয়া", en: "Gentle Hand Wash" },
    },
  },
  {
    id: generateUniqueId("designer"),
    name: { bn: "রিভার্সিবল ডিজাইনার টুপি", en: "Reversible Designer Tupi" },
    slug: "reversible-designer-tupi",
    description: {
      bn: "একটি টুপিতে দুটি ডিজাইন। উল্টে পরার উপযোগী ডিজাইনার টুপি।",
      en: "Two designs in one tupi. A designer tupi that can be worn inside out.",
    },
    price: 700,
    categories: [{ bn: "ডিজাইনার", en: "Designer" }],
    image:
      "https://res.cloudinary.com/daqgkrypt/image/upload/v1755109177/02-min_ei9l16.png",
    availableQuantity: 20,
    isMostSelling: false,
    deliveryCharge: 70,
    availableSizes: ["M", "L"],
    features: {
      bn: ["বহু-রঙা প্যাচওয়ার্ক", "প্রতিটি টুপি অনন্য", "বোহেমিয়ান স্টাইল"],
      en: ["Multi-colored Patchwork", "Each piece is unique", "Bohemian Style"],
    },
    specifications: {
      material: { bn: "মিশ্র ফ্যাব্রিক", en: "Mixed Fabric" },
      origin: { bn: "ঢাকা, বাংলাদেশ", en: "Dhaka, Bangladesh" },
      care: { bn: "হালকা হাতে ধোয়া", en: "Gentle Hand Wash" },
    },
  },
];
