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
  categories: {
    bn: string;
    en: string;
  }[];
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