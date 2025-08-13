export interface Translation {
  [key: string]: string | Translation;
}

export const translations = {
  bn: {
    // Site Info
    site: {
      name: "বগুড়া জালি টুপি",
      tagline: "ঐতিহ্যবাহী বাংলাদেশি টুপি",
    },
    // Navigation
    nav: {
      home: "হোম",
      products: "প্রোডাক্ট",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
    },
    // Categories
    categories: {
      all: "সব ক্যাটেগরি",
      classic: "ক্লাসিক",
      premium: "প্রিমিয়াম",
      handmade: "হ্যান্ডমেড",
      designer: "ডিজাইনার",
      kids: "শিশুদের",
    },
    // Common
    common: {
      search: "খুঁজুন",
      searchPlaceholder: "টুপি খুঁজুন...",
      buyNow: "এখনই কিনুন",
      viewCollection: "কালেকশন দেখুন",
      viewOffer: "অফার দেখুন",
      allCategories: "সব ক্যাটেগরি",
      mostSelling: "বেস্ট সেলার",
      lowStock: "স্টক কম",
      stock: "স্টক",
      size: "সাইজ",
      pieces: "পিস",
      deliveryCharge: "ডেলিভারি চার্জ",
      category: "ক্যাটেগরি",
      price: "দাম",
      description: "বিবরণ",
      availableSizes: "উপলব্ধ সাইজ",
      quantity: "পরিমাণ",
      addToCart: "কার্টে যোগ করুন",
      orderNow: "অর্ডার করুন",
    },
    // Home Page
    home: {
      heroTitle1: "বগুড়ার ঐতিহ্যবাহী জালি টুপি",
      heroSubtitle1: "সারা বাংলাদেশে ফ্রি ডেলিভারি",
      heroTitle2: "প্রিমিয়াম কোয়ালিটি টুপি",
      heroSubtitle2: "হাতে তৈরি, উন্নত মানের",
      heroTitle3: "বিশেষ ছাড় ৫০% পর্যন্ত",
      heroSubtitle3: "সীমিত সময়ের জন্য অফার",
      filterTitle: "ক্যাটেগরি অনুযায়ী ফিল্টার করুন",
      mostSellingTitle: "সবচেয়ে বেশি বিক্রিত টুপি",
      mostSellingSubtitle: "আমাদের গ্রাহকদের পছন্দের টুপিগুলো দেখুন",
      allProductsTitle: "সকল টুপি",
      searchResultsTitle: "এর জন্য ফলাফল",
      productsFound: "টি পণ্য পাওয়া গেছে",
      noProductsFound:
        "কোনো পণ্য পাওয়া যায়নি। অন্য ক্যাটেগরি বা সার্চ টার্ম ব্যবহার করে দেখুন।",
    },
    // Products Page
    products: {
      title: "সকল পণ্য",
      subtitle: "আমাদের সম্পূর্ণ জালি টুপি কালেকশন দেখুন",
      filters: "ফিল্টার",
      reset: "রিসেট",
      priceRange: "দাম পরিসীমা",
      sortBy: "সাজান",
      sortDefault: "ডিফল্ট",
      sortPopular: "জনপ্রিয়তা",
      sortPriceLow: "দাম: কম থেকে বেশি",
      sortPriceHigh: "দাম: বেশি থেকে কম",
      sortName: "নাম অনুযায়ী",
      searchingFor: "খোঁজা হচ্ছে:",
      resetAllFilters: "সব ফিল্টার রিসেট করুন",
    },
    // About Page
    about: {
      title: "বগুড়া জালি টুপি সম্পর্কে",
      subtitle: "বাংলাদেশের ঐতিহ্যবাহী জালি টুপির সবচেয়ে বিশ্বস্ত ব্র্যান্ড",
      historyTitle: "আমাদের ইতিহাস",
      historyText1:
        "বগুড়া জালি টুপি বাংলাদেশের ঐতিহ্যবাহী হস্তশিল্পের একটি অনন্য নিদর্শন। শতাব্দীর পর শতাব্দী ধরে বগুড়া অঞ্চলের দক্ষ কারিগরেরা এই সুন্দর টুপি তৈরি করে আসছেন।",
      historyText2:
        "আমাদের প্রতিষ্ঠান ২০১০ সাল থেকে এই ঐতিহ্যবাহী শিল্পকে এগিয়ে নিয়ে যাওয়ার জন্য কাজ করে যাচ্ছে। আমরা স্থানীয় কারিগরদের সাথে কাজ করে উন্নত মানের জালি টুপি তৈরি করি।",
      historyText3:
        "আমাদের লক্ষ্য হলো বাংলাদেশের এই ঐতিহ্যবাহী শিল্পকে সারা দেশে এবং বিদেশে পৌঁছে দেওয়া।",
      whyChooseTitle: "কেন আমাদের বেছে নেবেন?",
      feature1Title: "উন্নত মানের কাঁচামাল",
      feature1Text:
        "আমরা শুধুমাত্র সর্বোচ্চ মানের সুতি কাপড় এবং উপকরণ ব্যবহার করি।",
      feature2Title: "দক্ষ কারিগর",
      feature2Text:
        "আমাদের অভিজ্ঞ কারিগরেরা প্রতিটি টুপি যত্ন সহকারে হাতে তৈরি করেন।",
      feature3Title: "সারা দেশে ডেলিভারি",
      feature3Text: "বাংলাদেশের যেকোনো প্রান্তে আমরা আপনার পণ্য পৌঁছে দিই।",
      reviewsTitle: "গ্রাহকদের মতামত",
      contactInfoTitle: "যোগাযোগের তথ্য",
      address: "ঠিকানা",
      phone: "ফোন",
      email: "ইমেইল",
      youtube: "ইউটিউব",
      watchChannel: "আমাদের চ্যানেল দেখুন",
    },
    // Contact Page
    contact: {
      title: "যোগাযোগ করুন",
      subtitle: "আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় সর্বদা প্রস্তুত।",
      contactInfoTitle: "যোগাযোগের তথ্য",
      contactInfoSubtitle:
        "আমাদের সাথে যোগাযোগ করার জন্য নিচের যেকোনো মাধ্যম ব্যবহার করতে পারেন।",
      address: "ঠিকানা",
      phone: "ফোন",
      email: "ইমেইল",
      youtube: "ইউটিউব চ্যানেল",
      businessHours: "ব্যবসার সময়",
      phoneHours: "সকাল ৯টা থেকে রাত ৯টা পর্যন্ত",
      emailResponse: "২৪ ঘন্টার মধ্যে উত্তর দেওয়া হয়",
      watchVideos: "আমাদের পণ্যের ভিডিও দেখুন",
      sunday: "রবিবার - বৃহস্পতিবার: ৯:০০ - ২১:০০",
      friday: "শুক্রবার: ১৪:০০ - ২১:০০",
      saturday: "শনিবার: ৯:০০ - ২১:০০",
      sendMessageTitle: "আমাদের বার্তা পাঠান",
      name: "নাম",
      phoneNumber: "ফোন নম্বর",
      subject: "বিষয়",
      message: "বার্তা",
      sendMessage: "বার্তা পাঠান",
      namePlaceholder: "আপনার নাম লিখুন",
      phonePlaceholder: "আপনার ফোন নম্বর",
      emailPlaceholder: "আপনার ইমেইল ঠিকানা",
      subjectPlaceholder: "বার্তার বিষয়",
      messagePlaceholder: "আপনার বার্তা লিখুন...",
      locationTitle: "আমাদের অবস্থান",
    },
    // Footer
    footer: {
      description:
        "বাংলাদেশের ঐতিহ্যবাহী জালি টুপির সবচেয়ে বিশ্বস্ত ব্র্যান্ড। উন্নত মানের টুপি সারা বাংলাদেশে পৌঁছে দিচ্ছি।",
      quickLinks: "দ্রুত লিংক",
      categories: "ক্যাটেগরি",
      classicCaps: "ক্লাসিক টুপি",
      premiumCaps: "প্রিমিয়াম টুপি",
      handmadeCaps: "হ্যান্ডমেড টুপি",
      kidsCaps: "শিশুদের টুপি",
      contact: "যোগাযোগ",
      copyright: "© ২০২৫ বগুড়া জালি টুপি। সকল অধিকার সংরক্ষিত।",
    },
  },
  en: {
    // Site Info
    site: {
      name: "Bogura Jali Tupi",
      tagline: "Traditional Bangladeshi Caps",
    },
    // Navigation
    nav: {
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact",
    },
    // Categories
    categories: {
      all: "All Categories",
      classic: "Classic",
      premium: "Premium",
      handmade: "Handmade",
      designer: "Designer",
      kids: "Kids",
    },
    // Common
    common: {
      search: "Search",
      searchPlaceholder: "Search caps...",
      buyNow: "Buy Now",
      viewCollection: "View Collection",
      viewOffer: "View Offer",
      allCategories: "All Categories",
      mostSelling: "Best Seller",
      lowStock: "Low Stock",
      stock: "Stock",
      size: "Size",
      pieces: "pieces",
      deliveryCharge: "Delivery Charge",
      category: "Category",
      price: "Price",
      description: "Description",
      availableSizes: "Available Sizes",
      quantity: "Quantity",
      addToCart: "Add to Cart",
      orderNow: "Order Now",
    },
    // Home Page
    home: {
      heroTitle1: "Traditional Bogura Jali Tupi",
      heroSubtitle1: "Free Delivery Across Bangladesh",
      heroTitle2: "Premium Quality Caps",
      heroSubtitle2: "Handmade, Superior Quality",
      heroTitle3: "Special Discount Up to 50%",
      heroSubtitle3: "Limited Time Offer",
      filterTitle: "Filter by Category",
      mostSellingTitle: "Best Selling Caps",
      mostSellingSubtitle: "See our customers' favorite caps",
      allProductsTitle: "All Caps",
      searchResultsTitle: "Results for",
      productsFound: "products found",
      noProductsFound:
        "No products found. Try using different categories or search terms.",
    },
    // Products Page
    products: {
      title: "All Products",
      subtitle: "Browse our complete Jali Tupi collection",
      filters: "Filters",
      reset: "Reset",
      priceRange: "Price Range",
      sortBy: "Sort By",
      sortDefault: "Default",
      sortPopular: "Popularity",
      sortPriceLow: "Price: Low to High",
      sortPriceHigh: "Price: High to Low",
      sortName: "Name",
      searchingFor: "Searching for:",
      resetAllFilters: "Reset All Filters",
    },
    // About Page
    about: {
      title: "About Bogura Jali Tupi",
      subtitle: "Bangladesh's Most Trusted Traditional Jali Tupi Brand",
      historyTitle: "Our History",
      historyText1:
        "Bogura Jali Tupi is a unique example of Bangladesh's traditional handicrafts. For centuries, skilled artisans from the Bogura region have been creating these beautiful caps.",
      historyText2:
        "Our organization has been working since 2010 to advance this traditional art. We work with local artisans to create high-quality Jali Tupi.",
      historyText3:
        "Our goal is to bring this traditional art of Bangladesh to the whole country and abroad.",
      whyChooseTitle: "Why Choose Us?",
      feature1Title: "High Quality Materials",
      feature1Text:
        "We use only the highest quality cotton fabrics and materials.",
      feature2Title: "Skilled Artisans",
      feature2Text: "Our experienced artisans carefully handcraft each cap.",
      feature3Title: "Nationwide Delivery",
      feature3Text: "We deliver your products to any corner of Bangladesh.",
      reviewsTitle: "Customer Reviews",
      contactInfoTitle: "Contact Information",
      address: "Address",
      phone: "Phone",
      email: "Email",
      youtube: "YouTube",
      watchChannel: "Watch Our Channel",
    },
    // Contact Page
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with us. We are always ready to serve you.",
      contactInfoTitle: "Contact Information",
      contactInfoSubtitle:
        "You can use any of the following methods to contact us.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      youtube: "YouTube Channel",
      businessHours: "Business Hours",
      phoneHours: "9 AM to 9 PM",
      emailResponse: "Response within 24 hours",
      watchVideos: "Watch our product videos",
      sunday: "Sunday - Thursday: 9:00 - 21:00",
      friday: "Friday: 14:00 - 21:00",
      saturday: "Saturday: 9:00 - 21:00",
      sendMessageTitle: "Send Us a Message",
      name: "Name",
      phoneNumber: "Phone Number",
      subject: "Subject",
      message: "Message",
      sendMessage: "Send Message",
      namePlaceholder: "Enter your name",
      phonePlaceholder: "Your phone number",
      emailPlaceholder: "Your email address",
      subjectPlaceholder: "Message subject",
      messagePlaceholder: "Write your message...",
      locationTitle: "Our Location",
    },
    // Footer
    footer: {
      description:
        "Bangladesh's most trusted traditional Jali Tupi brand. Delivering high-quality caps across Bangladesh.",
      quickLinks: "Quick Links",
      categories: "Categories",
      classicCaps: "Classic Caps",
      premiumCaps: "Premium Caps",
      handmadeCaps: "Handmade Caps",
      kidsCaps: "Kids Caps",
      contact: "Contact",
      copyright: "© 2025 Bogura Jali Tupi. All rights reserved.",
    },
  },
};

export const getTranslation = (lang: string, key: string): string => {
  const keys = key.split(".");
  let value: any = translations[lang as keyof typeof translations];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};
