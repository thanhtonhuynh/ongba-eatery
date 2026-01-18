import { categories } from "@/_data/categories";
import { featuredItems } from "@/_data/curated";
import { itemsByCategory } from "@/_data_access";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Heading } from "@/components/heading";
import { DoubleBorderButton } from "@/components/ui/button";
import Link from "next/link";
import { MenuSection } from "./menu-section";

export default function MenuPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <div className="flex flex-col items-center gap-8 px-6 py-16 text-center">
        <Heading>Downtown Menu</Heading>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          <Link href="#">Reserve a table</Link>
        </DoubleBorderButton>

        <p className="text-lg italic">We encourage to call us directly to place a pick-up order.</p>
      </div>

      <MenuSection
        title={featuredItems.title}
        description={featuredItems.description}
        items={featuredItems.items}
      />

      {categories.map((category, index) => (
        <MenuSection
          key={category.key}
          index={index}
          title={category.title}
          description={category.description}
          items={itemsByCategory[category.key] ?? []}
        />
      ))}
    </>
  );
}
