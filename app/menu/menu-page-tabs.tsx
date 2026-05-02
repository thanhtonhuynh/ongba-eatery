"use client";

import { coquitlamCategories } from "@/_data/coquitlam-categories";
import { coquitlamDesserts, coquitlamDrinks } from "@/_data/coquitlam-desserts-drinks";
import { coquitlamItemsByCategory } from "@/_data_access/coquitlam";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FamilySetContent } from "./family-set-content";
import { MenuNav } from "./menu-nav";
import { MenuSection } from "./menu-section";

const outerTabListClass =
  "bg-wine w-full justify-center gap-3 border-b border-gold/20 px-2 py-4 sm:gap-6 md:gap-10";
const outerTabTriggerClass =
  "text-secondary hover:text-light-gold data-active:text-light-gold rounded-none px-1 py-2 text-sm font-semibold uppercase tracking-wide after:bg-gold sm:px-3 sm:text-base md:text-base";

const dessertsDrinksNavCategories = [
  { key: "cq_sub_desserts", title: "Desserts" },
  { key: "cq_sub_drinks", title: "Drinks" },
];

export function MenuPageTabs() {
  return (
    <Tabs defaultValue="all-day" className="w-full">
      <TabsList variant="line" className={outerTabListClass}>
        <TabsTrigger value="all-day" className={outerTabTriggerClass}>
          All-day
        </TabsTrigger>
        <TabsTrigger value="family-set" className={outerTabTriggerClass}>
          Family Set
        </TabsTrigger>
        <TabsTrigger value="desserts-drinks" className={outerTabTriggerClass}>
          Desserts &amp; Drinks
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all-day" className="mt-0 outline-none">
        <div className="border-gold/50 border p-3 sm:p-6">
          <MenuNav categories={coquitlamCategories} />
        </div>
        {coquitlamCategories.map((category, index) => (
          <MenuSection
            key={category.key}
            id={category.key}
            index={index}
            title={category.title}
            description={category.description}
            items={coquitlamItemsByCategory[category.key] ?? []}
            addOns={category.addOns}
          />
        ))}
      </TabsContent>

      <TabsContent value="family-set" className="mt-0 outline-none">
        <FamilySetContent />
      </TabsContent>

      <TabsContent value="desserts-drinks" className="mt-0 outline-none">
        <div className="border-gold/50 border p-3 sm:p-6">
          <MenuNav categories={dessertsDrinksNavCategories} />
        </div>
        <MenuSection id="cq_sub_desserts" index={0} title="Desserts" items={coquitlamDesserts} />
        <MenuSection id="cq_sub_drinks" index={1} title="Drinks" items={coquitlamDrinks} />
      </TabsContent>
    </Tabs>
  );
}
