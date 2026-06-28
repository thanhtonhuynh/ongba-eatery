import { signatureSetFor2 } from "@/_data/coquitlam-signature-set";
import { Booklet } from "./booklet";
import { ChoiceList } from "./choice-list";
import { DessertSection } from "./dessert-section";
import { FixedPlusOneOf } from "./fixed-plus-one-of";
import { SectionHeader } from "./section-header";
import { normalizeSignatureDish } from "./types";

export function For2Booklet() {
  const d = signatureSetFor2;
  return (
    <Booklet id="cq_signature_for_2" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader title="Starter" />
        <div className="space-y-7">
          <ChoiceList items={d.firstCourse.options.map(normalizeSignatureDish)} />
          <span aria-hidden="true" className="bg-gold/25 block h-px w-full" />
          <ChoiceList items={d.secondCourse.options.map(normalizeSignatureDish)} />
        </div>
      </section>

      <section>
        <SectionHeader title="Entrée" />
        <FixedPlusOneOf fixed={d.thirdCourse.fixed} options={d.thirdCourse.oneOf} />
      </section>

      <DessertSection choice />
    </Booklet>
  );
}
