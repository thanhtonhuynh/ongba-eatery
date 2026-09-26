"use client";

import { brunchSections, dinnerSections } from "@/_data_access/coquitlam";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DrinksContent } from "./drinks-content";
import { MenuNav } from "./menu-nav";
import { MenuSection } from "./menu-section";
import { SignatureSetContent } from "./signature-set-content";

const outerTabListClass =
  "bg-wine w-full justify-center gap-3 border-b border-gold/20 px-2 py-4 sm:gap-6 md:gap-10";
const outerTabTriggerClass =
  "text-secondary hover:text-light-gold data-active:text-light-gold rounded-none px-1 py-2 text-sm font-semibold uppercase tracking-wide after:bg-gold sm:px-3 sm:text-base md:text-base";

const foodMenus = [
  { value: "brunch", label: "Brunch", sections: brunchSections },
  { value: "dinner", label: "Dinner", sections: dinnerSections },
];

export function MenuPageTabs() {
  return (
    <Tabs defaultValue="brunch" className="w-full">
      <TabsList variant="line" className={outerTabListClass}>
        {foodMenus.map((menu) => (
          <TabsTrigger key={menu.value} value={menu.value} className={outerTabTriggerClass}>
            {menu.label}
          </TabsTrigger>
        ))}
        <TabsTrigger value="signature-set" className={outerTabTriggerClass}>
          Signature Set
        </TabsTrigger>
        <TabsTrigger value="drinks" className={outerTabTriggerClass}>
          Drink
        </TabsTrigger>
      </TabsList>

      {foodMenus.map((menu) => (
        <TabsContent
          key={menu.value}
          value={menu.value}
          className="mt-8 space-y-8 outline-none sm:mt-10"
        >
          <div className="border-gold/40 border p-3 sm:p-6">
            <MenuNav categories={menu.sections} />
          </div>
          {menu.sections.map((section, index) => (
            <MenuSection
              key={section.key}
              id={section.key}
              index={index}
              title={section.title}
              description={section.description}
              note={section.note}
              items={section.items}
              addOns={section.addOns}
            />
          ))}
        </TabsContent>
      ))}

      <TabsContent value="signature-set" className="mt-8 space-y-8 outline-none sm:mt-10">
        <SignatureSetContent />
      </TabsContent>

      <TabsContent value="drinks" className="mt-8 space-y-8 outline-none sm:mt-10">
        <DrinksContent />
      </TabsContent>
    </Tabs>
  );
}
