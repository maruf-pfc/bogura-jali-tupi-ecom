export interface CategoryData {
  id: string;
  name: {
    bn: string;
    en: string;
  };
  slug: string;
}

export const categoryData: CategoryData[] = [
  {
    id: "all",
    name: { bn: "সব ক্যাটেগরি", en: "All Categories" },
    slug: "all",
  },
  {
    id: "classic",
    name: { bn: "ক্লাসিক", en: "Classic" },
    slug: "classic",
  },
  {
    id: "premium",
    name: { bn: "প্রিমিয়াম", en: "Premium" },
    slug: "premium",
  },
  {
    id: "handmade",
    name: { bn: "হ্যান্ডমেড", en: "Handmade" },
    slug: "handmade",
  },
  {
    id: "designer",
    name: { bn: "ডিজাইনার", en: "Designer" },
    slug: "designer",
  },
  {
    id: "kids",
    name: { bn: "শিশুদের", en: "Kids" },
    slug: "kids",
  },
  {
    id: "special",
    name: { bn: "বিশেষ অনুষ্ঠান", en: "Special Occasion" },
    slug: "special",
  },
];

export const getCategoryName = (categoryId: string, lang: string): string => {
  const category = categoryData.find((cat) => cat.id === categoryId);
  return category
    ? category.name[lang as keyof typeof category.name]
    : categoryId;
};
