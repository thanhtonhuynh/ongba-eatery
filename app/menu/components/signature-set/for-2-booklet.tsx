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
        <SectionHeader title="First Course" />
        <ChoiceList items={d.firstCourse.options.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader title="Second Course" />
        <ChoiceList items={d.secondCourse.options.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader title="Third Course" />
        <FixedPlusOneOf fixed={d.thirdCourse.fixed} options={d.thirdCourse.oneOf} />
      </section>

      <DessertSection />
    </Booklet>
  );
}
