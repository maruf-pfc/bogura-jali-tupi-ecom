"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { Product } from "@/interfaces/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();

  const displayCategory =
    product.categories && product.categories.length > 0
      ? product.categories[0][language]
      : "";

  return (
    <Card className="group overflow-hidden">
      <Link href={`/products/${product.slug}`} className="cursor-pointer">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name[language]}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.isMostSelling && (
            <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
              {t("common.mostSelling")}
            </Badge>
          )}
          {product.availableQuantity < 10 && (
            <Badge variant="destructive" className="absolute top-2 right-2">
              {t("common.lowStock")}
            </Badge>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${product.slug}`} className="cursor-pointer">
          <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
            {product.name[language]}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">
              ৳{product.price}
            </span>
            <p className="text-xs text-muted-foreground">
              {t("common.deliveryCharge")}: ৳{product.deliveryCharge}
            </p>
          </div>
          {displayCategory && (
            <Badge variant="outline">{displayCategory}</Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{t("common.stock")}:</span>
            <span
              className={
                product.availableQuantity < 10
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {product.availableQuantity} {t("common.pieces")}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{t("common.size")}:</span>
            <span>{product.availableSizes.join(", ")}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
