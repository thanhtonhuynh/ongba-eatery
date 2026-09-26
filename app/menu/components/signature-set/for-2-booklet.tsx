import { signatureSetFor2 } from "@/_data/coquitlam-signature-set";
import { Fragment } from "react";
import { Booklet } from "./booklet";
import { ChoiceList } from "./choice-list";
import { DessertSection } from "./dessert-section";
import { DishList } from "./dish-list";
import { SectionHeader } from "./section-header";
import { normalizeSignatureDish } from "./types";

export function For2Booklet() {
  const d = signatureSetFor2;
  return (
    <Booklet id="cq_signature_for_2" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader title="Starter" />
        <div className="space-y-7">
          {d.starterChoices.map((options, i) => (
            <Fragment key={i}>
              {i > 0 && <span aria-hidden="true" className="bg-gold/25 block h-px w-full" />}
              <ChoiceList items={options.map(normalizeSignatureDish)} />
            </Fragment>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader title="Entrée" />
        <DishList items={d.entrees.map(normalizeSignatureDish)} />
      </section>

      <DessertSection choiceLine={d.dessertLine} />
    </Booklet>
  );
}
