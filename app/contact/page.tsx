"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Youtube, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:bogurajalitupi@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `${language === "bn" ? "নাম:" : "Name:"} ${formData.name}\n${
        language === "bn" ? "ইমেইল:" : "Email:"
      } ${formData.email}\n${language === "bn" ? "ফোন:" : "Phone:"} ${
        formData.phone
      }\n\n${language === "bn" ? "বার্তা:" : "Message:"}\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
              <p className="text-xl text-muted-foreground">
                {t("contact.subtitle")}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    {t("contact.contactInfoTitle")}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {t("contact.contactInfoSubtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">
                            {t("contact.address")}
                          </h3>
                          <p className="text-muted-foreground">
                            বগুড়া, বাংলাদেশ, ৫৮৪০
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">
                            {t("contact.phone")}
                          </h3>
                          <p className="text-muted-foreground">০১৯৬৬-৬৪৪৪৫৭</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {t("contact.phoneHours")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">
                            {t("contact.email")}
                          </h3>
                          <p className="text-muted-foreground">
                            bogurajalitupi@gmail.com
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {t("contact.emailResponse")}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Youtube className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">{t('contact.youtube')}</h3>
                          <a 
                            href="https://www.youtube.com/@imranhasan871" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline cursor-pointer"
                          >
                            Imran Hasan
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            {t('contact.watchVideos')}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">{t('contact.businessHours')}</h3>
                          <div className="text-muted-foreground space-y-1">
                            <p>{t('contact.sunday')}</p>
                            <p>{t('contact.friday')}</p>
                            <p>{t('contact.saturday')}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contact.sendMessageTitle")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                          >
                            {t("contact.name")} *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder={t("contact.namePlaceholder")}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium mb-2"
                          >
                            {t("contact.phoneNumber")} *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder={t("contact.phonePlaceholder")}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          {t("contact.email")}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2"
                        >
                          {t("contact.subject")} *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder={t("contact.subjectPlaceholder")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          {t("contact.message")} *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder={t("contact.messagePlaceholder")}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full cursor-pointer"
                        size="lg"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        {t("contact.sendMessage")}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              {t("contact.locationTitle")}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187767284!2d89.28168!3d24.8465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e8a6e0c5b7%3A0x318c4b1dd3c5b7a8!2sBogura!5e0!3m2!1sen!2sbd!4v1635789012345!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={
                    language === "bn"
                      ? "বগুড়া জালি টুপি অবস্থান"
                      : "Bogura Jali Tupi Location"
                  }
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
