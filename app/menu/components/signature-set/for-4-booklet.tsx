import { signatureSetFor4 } from "@/_data/coquitlam-signature-set";
import { Booklet } from "./booklet";
import { ChoiceList } from "./choice-list";
import { DessertSection } from "./dessert-section";
import { DishList } from "./dish-list";
import { SectionHeader } from "./section-header";
import { normalizeSignatureDish } from "./types";

export function For4Booklet() {
  const d = signatureSetFor4;
  return (
    <Booklet id="cq_signature_for_4" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader title="First Course" helper="All included" />
        <DishList items={d.firstCourse.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader title="Second Course" helper="All included" />
        <DishList items={d.secondCourse.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader title="Third Course" />
        <ChoiceList items={d.thirdCourse.map(normalizeSignatureDish)} />
      </section>

      <DessertSection />
    </Booklet>
  );
}
