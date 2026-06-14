import { signatureSetFor2 } from "@/_data/coquitlam-signature-set";
import { Booklet } from "./booklet";
import { DessertSection } from "./dessert-section";
import { FixedPlusOneOf } from "./fixed-plus-one-of";
import { NumberedList } from "./numbered-list";
import { SectionHeader } from "./section-header";
import { normalizeSignatureDish } from "./types";

export function For2Booklet() {
  const d = signatureSetFor2;
  return (
    <Booklet id="cq_signature_for_2" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader eyebrow="First Course" helper="Choose 1" />
        <NumberedList items={d.firstCourse.options.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader eyebrow="Second Course" helper="Choose 1" />
        <NumberedList items={d.secondCourse.options.map(normalizeSignatureDish)} />
      </section>

      <section>
        <SectionHeader eyebrow="Third Course" />
        <FixedPlusOneOf fixed={d.thirdCourse.fixed} options={d.thirdCourse.oneOf} />
      </section>

      <DessertSection count={1} />
    </Booklet>
  );
}
