import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/db/products";
import ProductDetailClient from "./product-detail-client";

// Generate static params for all product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
