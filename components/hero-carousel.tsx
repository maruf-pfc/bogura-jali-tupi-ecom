"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      title: t("home.heroTitle1"),
      subtitle: t("home.heroSubtitle1"),
      image: "/bangladeshi-caps.png",
      cta: t("common.buyNow"),
    },
    {
      id: 2,
      title: t("home.heroTitle2"),
      subtitle: t("home.heroSubtitle2"),
      image: "/bangladeshi-caps.png",
      cta: t("common.viewCollection"),
    },
    {
      id: 3,
      title: t("home.heroTitle3"),
      subtitle: t("home.heroSubtitle3"),
      image: "/bangladeshi-caps.png",
      cta: t("common.viewOffer"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide
              ? "translate-x-0"
              : index < currentSlide
              ? "-translate-x-full"
              : "translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Card className="bg-white/90 backdrop-blur-sm max-w-md mx-4">
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{slide.subtitle}</p>
                  <Button size="lg" className="w-full cursor-pointer">
                    {slide.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
