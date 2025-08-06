"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("site.name")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.quickLinks")}</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/products"
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("nav.products")}
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.categories")}</h3>
            <div className="space-y-2">
              <Link
                href={`/products?category=${t("categories.classic")}`}
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("footer.classicCaps")}
              </Link>
              <Link
                href={`/products?category=${t("categories.premium")}`}
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("footer.premiumCaps")}
              </Link>
              <Link
                href={`/products?category=${t("categories.handmade")}`}
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("footer.handmadeCaps")}
              </Link>
              <Link
                href={`/products?category=${t("categories.kids")}`}
                className="block text-sm text-muted-foreground hover:text-primary cursor-pointer"
              >
                {t("footer.kidsCaps")}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  বগুড়া, বাংলাদেশ, ৫৮৪০
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  ০১৯৬৬-৬৪৪৪৫৭
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  bogurajalitupi@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Youtube className="h-4 w-4 text-muted-foreground" />
                <Link
                  href="https://www.youtube.com/@imranhasan871"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary cursor-pointer"
                >
                  YouTube চ্যানেল
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
