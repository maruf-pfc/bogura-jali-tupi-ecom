export interface Product {
  id: string;
  name: {
    bn: string;
    en: string;
  };
  slug: string;
  description: {
    bn: string;
    en: string;
  };
  price: number;
  category: {
    bn: string;
    en: string;
  };
  image: string;
  availableQuantity: number;
  isMostSelling: boolean;
  deliveryCharge: number;
  availableSizes: string[];
  features?: {
    bn: string[];
    en: string[];
  };
  specifications?: {
    material: { bn: string; en: string };
    origin: { bn: string; en: string };
    care: { bn: string; en: string };
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: {
      bn: "ক্লাসিক সাদা জালি টুপি",
      en: "Classic White Jali Tupi",
    },
    slug: "classic-white-jali-tupi",
    description: {
      bn: "ঐতিহ্যবাহী বগুড়ার সাদা জালি টুপি। উন্নত মানের সুতি কাপড় দিয়ে তৈরি।",
      en: "Traditional Bogura white Jali Tupi. Made with high-quality cotton fabric.",
    },
    price: 350,
    category: {
      bn: "ক্লাসিক",
      en: "Classic",
    },
    image: "/placeholder.png",
    availableQuantity: 50,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["S", "M", "L", "XL"],
    features: {
      bn: ["১০০% সুতি কাপড়", "হাতে তৈরি", "আরামদায়ক ফিটিং", "টেকসই মান"],
      en: [
        "100% Cotton Fabric",
        "Handmade",
        "Comfortable Fitting",
        "Durable Quality",
      ],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "2",
    name: {
      bn: "প্রিমিয়াম কালো জালি টুপি",
      en: "Premium Black Jali Tupi",
    },
    slug: "premium-black-jali-tupi",
    description: {
      bn: "প্রিমিয়াম কোয়ালিটির কালো জালি টুপি। বিশেষ অনুষ্ঠানের জন্য উপযুক্ত।",
      en: "Premium quality black Jali Tupi. Suitable for special occasions.",
    },
    price: 450,
    category: {
      bn: "প্রিমিয়াম",
      en: "Premium",
    },
    image: "/placeholder.png",
    availableQuantity: 30,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["M", "L", "XL"],
    features: {
      bn: ["১০০% সুতি কাপড়", "হাতে তৈরি", "আরামদায়ক ফিটিং", "টেকসই মান"],
      en: [
        "100% Cotton Fabric",
        "Handmade",
        "Comfortable Fitting",
        "Durable Quality",
      ],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "3",
    name: {
      bn: "হ্যান্ডমেড জালি টুপি",
      en: "Handmade Jali Tupi",
    },
    slug: "handmade-jali-tupi",
    description: {
      bn: "সম্পূর্ণ হাতে তৈরি জালি টুপি। অভিজ্ঞ কারিগরদের হাতের কাজ।",
      en: "Fully handmade Jali Tupi. Crafted by experienced artisans.",
    },
    price: 550,
    category: {
      bn: "হ্যান্ডমেড",
      en: "Handmade",
    },
    image: "/placeholder.png",
    availableQuantity: 20,
    isMostSelling: false,
    deliveryCharge: 80,
    availableSizes: ["S", "M", "L"],
    features: {
      bn: ["হাতে তৈরি", "সুন্দর দিকনির্মাণ", "সংরক্ষণীয় মান"],
      en: ["Handmade", "Beautiful Design", "Durable Quality"],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "4",
    name: {
      bn: "ডিজাইনার জালি টুপি",
      en: "Designer Jali Tupi",
    },
    slug: "designer-jali-tupi",
    description: {
      bn: "আধুনিক ডিজাইনের জালি টুপি। তরুণদের জন্য বিশেষভাবে তৈরি।",
      en: "Modern design Jali Tupi. Specifically designed for young people.",
    },
    price: 400,
    category: {
      bn: "ডিজাইনার",
      en: "Designer",
    },
    image: "/placeholder.png",
    availableQuantity: 40,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["M", "L", "XL"],
    features: {
      bn: ["আধুনিক ডিজাইন", "হাতে তৈরি", "আরামদায়ক ফিটিং", "টেকসই মান"],
      en: [
        "Modern Design",
        "Handmade",
        "Comfortable Fitting",
        "Durable Quality",
      ],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "5",
    name: {
      bn: "শিশুদের জালি টুপি",
      en: "Kids Jali Tupi",
    },
    slug: "kids-jali-tupi",
    description: {
      bn: "শিশুদের জন্য বিশেষভাবে তৈরি ছোট সাইজের জালি টুপি।",
      en: "Specialized Jali Tupi for kids in small sizes.",
    },
    price: 250,
    category: {
      bn: "শিশুদের",
      en: "Kids",
    },
    image: "/placeholder.png",
    availableQuantity: 60,
    isMostSelling: false,
    deliveryCharge: 50,
    availableSizes: ["XS", "S"],
    features: {
      bn: ["ছোট সাইজের", "সুন্দর দিকনির্মাণ", "সংরক্ষণীয় মান"],
      en: ["Small Sizes", "Beautiful Design", "Durable Quality"],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "6",
    name: {
      bn: "বিয়ের জালি টুপি",
      en: "Wedding Jali Tupi",
    },
    slug: "wedding-jali-tupi",
    description: {
      bn: "বিয়ে ও বিশেষ অনুষ্ঠানের জন্য সোনালি কাজ করা জালি টুপি।",
      en: "Golden embroidered Jali Tupi for weddings and special occasions.",
    },
    price: 650,
    category: {
      bn: "বিশেষ অনুষ্ঠান",
      en: "Special Occasions",
    },
    image: "/placeholder.png",
    availableQuantity: 15,
    isMostSelling: false,
    deliveryCharge: 80,
    availableSizes: ["M", "L", "XL"],
    features: {
      bn: ["সোনালি কাজ", "হাতে তৈরি", "আরামদায়ক ফিটিং", "টেকসই মান"],
      en: [
        "Golden Embroidery",
        "Handmade",
        "Comfortable Fitting",
        "Durable Quality",
      ],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "7",
    name: {
      bn: "নেভি ব্লু জালি টুপি",
      en: "Navy Blue Jali Tupi",
    },
    slug: "navy-blue-jali-tupi",
    description: {
      bn: "নেভি ব্লু রঙের আকর্ষণীয় জালি টুপি। অফিস ও ফর্মাল পোশাকের সাথে মানানসই।",
      en: "Navy blue attractive Jali Tupi. Goes well with office and formal wear.",
    },
    price: 380,
    category: {
      bn: "ক্লাসিক",
      en: "Classic",
    },
    image: "/placeholder.png",
    availableQuantity: 35,
    isMostSelling: true,
    deliveryCharge: 60,
    availableSizes: ["S", "M", "L", "XL"],
    features: {
      bn: ["নেভি ব্লু রঙ", "১০০% সুতি কাপড়", "হাতে তৈরি", "আরামদায়ক ফিটিং"],
      en: [
        "Navy Blue Color",
        "100% Cotton Fabric",
        "Handmade",
        "Comfortable Fitting",
      ],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
  {
    id: "8",
    name: {
      bn: "এমব্রয়ডারি জালি টুপি",
      en: "Embroidery Jali Tupi",
    },
    slug: "embroidery-jali-tupi",
    description: {
      bn: "সুন্দর এমব্রয়ডারি কাজ করা জালি টুপি। ঈদ ও উৎসবের জন্য আদর্শ।",
      en: "Beautifully embroidered Jali Tupi. Ideal for Eid and festivals.",
    },
    price: 500,
    category: {
      bn: "প্রিমিয়াম",
      en: "Premium",
    },
    image: "/placeholder.png",
    availableQuantity: 25,
    isMostSelling: false,
    deliveryCharge: 70,
    availableSizes: ["M", "L", "XL"],
    features: {
      bn: ["সুন্দর এমব্রয়ডারি", "হাতে তৈরি", "আরামদায়ক ফিটিং", "টেকসই মান"],
      en: [
        "Beautiful Embroidery",
        "Handmade",
        "Comfortable Fitting",
        "Durable Quality",
      ],
    },
    specifications: {
      material: { bn: "সুতি কাপড়", en: "Cotton Fabric" },
      origin: { bn: "বগুড়া, বাংলাদেশ", en: "Bogura, Bangladesh" },
      care: { bn: "হাতে ধোয়া", en: "Hand Wash" },
    },
  },
];

export const categories = [
  "সব ক্যাটেগরি",
  "ক্লাসিক",
  "প্রিমিয়াম",
  "হ্যান্ডমেড",
  "ডিজাইনার",
  "শিশুদের",
  "বিশেষ অনুষ্ঠান",
];

export const getMostSellingProducts = () => {
  return products.filter((product) => product.isMostSelling);
};

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: string) => {
  if (category === "সব ক্যাটেগরি") return products;
  return products.filter(
    (product) =>
      product.category.bn === category || product.category.en === category
  );
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.bn.toLowerCase().includes(lowercaseQuery) ||
      product.name.en.toLowerCase().includes(lowercaseQuery) ||
      product.description.bn.toLowerCase().includes(lowercaseQuery) ||
      product.description.en.toLowerCase().includes(lowercaseQuery) ||
      product.category.bn.toLowerCase().includes(lowercaseQuery) ||
      product.category.en.toLowerCase().includes(lowercaseQuery)
  );
};
