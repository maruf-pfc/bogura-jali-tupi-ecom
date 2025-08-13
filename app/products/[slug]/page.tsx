import { notFound } from "next/navigation";
import { products } from "@/db/products";
import ProductDetailClient from "./product-detail-client";
import { getProductBySlug } from "@/lib/helpers";

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
