import { products } from "@/db/products";

export const getMostSellingProducts = () => {
  return products.filter((product) => product.isMostSelling);
};

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};

export const getProductsByCategory = (category: string) => {
  if (category === "সব ক্যাটেগরি") return products;
  return products.filter((product) =>
    product.categories.some((cat) => cat.bn === category || cat.en === category)
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
      product.categories.some((cat) =>
        cat.bn.toLowerCase().includes(lowercaseQuery)
      ) ||
      product.categories.some((cat) =>
        cat.en.toLowerCase().includes(lowercaseQuery)
      )
  );
};

export const generateUniqueId = (prefix: string = "prod"): string => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 9);

  return `${prefix}_${timestamp}_${randomPart}`;
};
