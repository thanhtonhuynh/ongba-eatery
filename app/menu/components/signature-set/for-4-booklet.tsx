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
        <SectionHeader title="Starter" />
        <div className="space-y-7">
          <DishList items={d.firstCourse.included.map(normalizeSignatureDish)} />
          <span aria-hidden="true" className="bg-gold/25 block h-px w-full" />
          <ChoiceList items={d.firstCourse.choice.map(normalizeSignatureDish)} />
        </div>
      </section>

      <section>
        <SectionHeader title="Entrée" />
        <div className="space-y-7">
          <DishList items={d.secondCourse.map(normalizeSignatureDish)} />
          <span aria-hidden="true" className="bg-gold/25 block h-px w-full" />
          <ChoiceList items={d.thirdCourse.map(normalizeSignatureDish)} />
        </div>
      </section>

      <DessertSection />
    </Booklet>
  );
}
