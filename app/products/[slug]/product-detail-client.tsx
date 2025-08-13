"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  Share2,
  Star,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/db/products";
import { useLanguage } from "@/contexts/language-context";
import { Product } from "@/interfaces/Product";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const { language, t } = useLanguage();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = products
    .filter((p) => {
      return (
        p.id !== product.id &&
        p.categories.some((pCat) =>
          product.categories.some(
            (currentProdCat) => currentProdCat.en === pCat.en
          )
        )
      );
    })
    .slice(0, 4);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.availableQuantity) {
      setQuantity(newQuantity);
    }
  };

  const handleOrderNow = () => {
    const message = `${
      language === "bn" ? "আমি অর্ডার করতে চাই:" : "I want to order:"
    }
${language === "bn" ? "পণ্য:" : "Product:"} ${product.name[language]}
${language === "bn" ? "সাইজ:" : "Size:"} ${selectedSize}
${language === "bn" ? "পরিমাণ:" : "Quantity:"} ${quantity}
${language === "bn" ? "মোট দাম:" : "Total Price:"} ৳${
      product.price * quantity + product.deliveryCharge
    }

${
  language === "bn"
    ? "দয়া করে আমার অর্ডার নিশ্চিত করুন।"
    : "Please confirm my order."
}`;

    const whatsappUrl = `https://wa.me/8801966644457?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary cursor-pointer">
              {t("nav.home")}
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-primary cursor-pointer"
            >
              {t("nav.products")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name[language]}</span>
          </div>

          {/* Back Button */}
          <Button variant="outline" className="mb-6 cursor-pointer" asChild>
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {language === "bn"
                ? "পণ্যের পাতায় ফিরে যান"
                : "Back to Products"}
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name[language]}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  {/* Correctly display multiple categories */}
                  <div className="flex flex-wrap gap-2">
                    {product.categories.map((cat) => (
                      <Badge key={cat.en} variant="outline">
                        {cat[language]}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="cursor-pointer"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="cursor-pointer"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">
                  {product.name[language]}
                </h1>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      (4.8)
                    </span>
                  </div>
                  {product.isMostSelling && (
                    <Badge className="bg-red-500 hover:bg-red-600">
                      {t("common.mostSelling")}
                    </Badge>
                  )}
                </div>

                <div className="flex items-baseline space-x-4 mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ৳{product.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    + ৳{product.deliveryCharge} {t("common.deliveryCharge")}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description[language]}
                </p>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  {t("common.size")} *
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        language === "bn" ? "সাইজ নির্বাচন করুন" : "Select size"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {product.availableSizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  {t("common.quantity")}
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="cursor-pointer"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.availableQuantity}
                    className="cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  {product.availableQuantity} {t("common.pieces")}{" "}
                  {language === "bn" ? "উপলব্ধ" : "available"}
                </p>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    product.availableQuantity > 10
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                />
                <span className="text-sm">
                  {product.availableQuantity > 10
                    ? language === "bn"
                      ? "স্টকে আছে"
                      : "In Stock"
                    : language === "bn"
                    ? "স্টক কম"
                    : "Low Stock"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 cursor-not-allowed">
                <Button
                  size="lg"
                  className="w-full cursor-pointer"
                  onClick={handleOrderNow}
                  disabled={!selectedSize}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t("common.orderNow")} - ৳
                  {product.price * quantity + product.deliveryCharge}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full cursor-not-allowed"
                >
                  {t("common.addToCart")}
                </Button>
              </div>

              {/* Total Calculation */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>
                        {language === "bn" ? "পণ্যের দাম" : "Product Price"} (
                        {quantity}x)
                      </span>
                      <span>৳{product.price * quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t("common.deliveryCharge")}</span>
                      <span>৳{product.deliveryCharge}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>{language === "bn" ? "মোট" : "Total"}</span>
                      <span>
                        ৳{product.price * quantity + product.deliveryCharge}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            {product.features && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "bn" ? "বৈশিষ্ট্য" : "Features"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features[language].map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Specifications */}
            {product.specifications && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    {language === "bn" ? "বিশেষ বিবরণ" : "Specifications"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "bn" ? "উপাদান:" : "Material:"}
                      </span>
                      <span>{product.specifications.material[language]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "bn" ? "উৎপত্তি:" : "Origin:"}
                      </span>
                      <span>{product.specifications.origin[language]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        {language === "bn" ? "যত্ন:" : "Care:"}
                      </span>
                      <span>{product.specifications.care[language]}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">
                {language === "bn" ? "সম্পর্কিত পণ্য" : "Related Products"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
