"use client";

import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";
import { reviews } from "@/db/reviews";
import { useLanguage } from "@/contexts/language-context";

export default function AboutPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("about.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t("about.historyTitle")}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>{t("about.historyText1")}</p>
                  <p>{t("about.historyText2")}</p>
                  <p>{t("about.historyText3")}</p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={
                    language === "bn"
                      ? "জালি টুপি তৈরির প্রক্রিয়া"
                      : "Jali Tupi making process"
                  }
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("about.whyChooseTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t("about.feature1Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("about.feature1Text")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("about.feature2Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("about.feature2Text")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("about.feature3Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {t("about.feature3Text")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t("about.reviewsTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {review.image && (
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        )}
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: review.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">{review.date}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {review.comment}
                    </p>
                    {review.videoUrl && (
                      <div className="flex items-center space-x-2 text-sm text-primary">
                        <Play className="h-4 w-4" />
                        <a
                          href={review.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          {language === "bn"
                            ? "ভিডিও রিভিউ দেখুন"
                            : "Watch Video Review"}
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                {t("about.contactInfoTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t("about.address")}</h3>
                    <p className="text-muted-foreground">
                      বগুড়া, বাংলাদেশ, ৫৮৪০
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t("about.phone")}</h3>
                    <p className="text-muted-foreground">০১৯৬৬-৬৪৪৪৫৭</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t("about.email")}</h3>
                    <p className="text-muted-foreground">
                      bogurajalitupi@gmail.com
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t("about.youtube")}</h3>
                    <a
                      href="https://www.youtube.com/@imranhasan871"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline cursor-pointer"
                    >
                      {t("about.watchChannel")}
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
