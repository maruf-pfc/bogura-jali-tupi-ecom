import { Suspense } from "react";
import ProductsClientPage from "@/components/pages/ProductsClient";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsClientPage />
    </Suspense>
  );
}
