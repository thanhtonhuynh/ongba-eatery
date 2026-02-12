import { productCategories } from "@/_data/categories";
import { productsByCategory } from "@/_data_access";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Heading } from "@/components/heading";
import { MenuSection } from "../menu/menu-section";

export default function MerchandisePage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <section className="flex flex-col items-center space-y-6 px-4 py-10 sm:py-15">
        <Heading>Merchandise</Heading>

        {/* <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          Shop Now
        </DoubleBorderButton> */}
      </section>

      {productCategories.map((category, index) => (
        <MenuSection
          key={category.key}
          id={category.key}
          index={index}
          title={category.title}
          items={productsByCategory[category.key] ?? []}
        />
      ))}

      <HorizontalPatternBand />
    </>
  );
}
