"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "bn" ? "en" : "bn")}
      className="cursor-pointer"
    >
      <Globe className="h-4 w-4 mr-2" />
      {language === "bn" ? "English" : "বাংলা"}
    </Button>
  );
}
