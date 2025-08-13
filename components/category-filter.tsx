"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/language-context";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { t } = useLanguage();

  const categoryKeys = [
    "all",
    "classic",
    "premium",
    "handmade",
    "designer",
    "kids",
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">
        {t("home.filterTitle")}
      </h3>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-2 pb-4 justify-center">
          {categoryKeys.map((categoryKey) => {
            const categoryName = t(`categories.${categoryKey}`);
            return (
              <Button
                key={categoryKey}
                variant={
                  selectedCategory === categoryName ? "default" : "outline"
                }
                onClick={() => onCategoryChange(categoryName)}
                className="shrink-0 cursor-pointer"
              >
                {categoryName}
              </Button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
