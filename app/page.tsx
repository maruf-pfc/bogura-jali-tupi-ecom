"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import CategoryFilter from "@/components/category-filter";
import ProductCard from "@/components/product-card";
import {
  products,
  getMostSellingProducts,
  getProductsByCategory,
  searchProducts,
} from "@/db/products";
import { useLanguage } from "@/contexts/language-context";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayProducts, setDisplayProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { t } = useLanguage();

  // Initialize selected category with translated value
  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(t("categories.all"));
    }
  }, [t, selectedCategory]);

  useEffect(() => {
    if (searchQuery) {
      setDisplayProducts(searchProducts(searchQuery));
    } else {
      setDisplayProducts(getProductsByCategory(selectedCategory));
    }
  }, [selectedCategory, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      router.push(`/products?search=${encodeURIComponent(query)}`);
    }
  };

  const mostSellingProducts = getMostSellingProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <HeroCarousel />
        </section>

        {/* Most Selling Products */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">
              {t("home.mostSellingTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("home.mostSellingSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {mostSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-4 py-8">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* All Products */}
        <section className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">
              {searchQuery
                ? `${t("home.searchResultsTitle")} "${searchQuery}"`
                : selectedCategory === t("categories.all")
                ? t("home.allProductsTitle")
                : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {displayProducts.length} {t("home.productsFound")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {displayProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                {t("home.noProductsFound")}
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
