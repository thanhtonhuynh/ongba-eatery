import { signatureSetFor4 } from "@/_data/coquitlam-signature-set";
import { Booklet } from "./booklet";
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
        <DishList items={d.starters.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader title="Entrée" />
        <DishList items={d.entrees.map(normalizeSignatureDish)} />
      </section>

      <DessertSection choiceLine={d.dessertLine} />
    </Booklet>
  );
}
