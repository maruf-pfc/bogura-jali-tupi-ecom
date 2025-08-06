"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products, searchProducts } from "@/db/products";
import { useLanguage } from "@/contexts/language-context";

export default function ProductsClientPage() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const categoryKeys = [
    "all",
    "classic",
    "premium",
    "handmade",
    "designer",
    "kids",
    "special",
  ];

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(t("categories.all"));
    }
  }, [t, selectedCategory]);

  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    if (category) {
      setSelectedCategory(category);
    }
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = searchProducts(searchQuery);
    }

    if (selectedCategory !== t("categories.all")) {
      filtered = filtered.filter(
        (product) =>
          product.category.bn === selectedCategory ||
          product.category.en === selectedCategory
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.name.bn.localeCompare(b.name.bn));
        break;
      case "popular":
        filtered.sort(
          (a, b) => (b.isMostSelling ? 1 : 0) - (a.isMostSelling ? 1 : 0)
        );
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy, searchQuery, t]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const clearFilters = () => {
    setSelectedCategory(t("categories.all"));
    setPriceRange([0, 1000]);
    setSortBy("default");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">{t("products.title")}</h1>
            <p className="text-muted-foreground">{t("products.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {t("products.filters")}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="cursor-pointer"
                    >
                      {t("products.reset")}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">
                      {t("common.category")}
                    </h3>
                    <div className="space-y-2">
                      {categoryKeys.map((categoryKey) => {
                        const categoryName = t(`categories.${categoryKey}`);
                        return (
                          <Button
                            key={categoryKey}
                            variant={
                              selectedCategory === categoryName
                                ? "default"
                                : "ghost"
                            }
                            className="w-full justify-start cursor-pointer"
                            onClick={() => setSelectedCategory(categoryName)}
                          >
                            {categoryName}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold mb-3">
                      {t("products.priceRange")}
                    </h3>
                    <div className="space-y-3">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000}
                        min={0}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>৳{priceRange[0]}</span>
                        <span>৳{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sort and Results */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {filteredProducts.length} {t("home.productsFound")}
                  </p>
                  {searchQuery && (
                    <Badge variant="secondary" className="mt-1">
                      {t("products.searchingFor")} "{searchQuery}"
                    </Badge>
                  )}
                </div>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder={t("products.sortBy")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">
                      {t("products.sortDefault")}
                    </SelectItem>
                    <SelectItem value="popular">
                      {t("products.sortPopular")}
                    </SelectItem>
                    <SelectItem value="price-low">
                      {t("products.sortPriceLow")}
                    </SelectItem>
                    <SelectItem value="price-high">
                      {t("products.sortPriceHigh")}
                    </SelectItem>
                    <SelectItem value="name">
                      {t("products.sortName")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    {t("home.noProductsFound")}
                  </p>
                  <Button onClick={clearFilters} className="cursor-pointer">
                    {t("products.resetAllFilters")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
