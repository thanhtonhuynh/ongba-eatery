import { signatureSetFor4 } from "@/_data/coquitlam-signature-set";
import { classicNoodleSoup } from "@/_data/coquitlam-menu-items/classic-noodle-soup";
import { Booklet } from "./booklet";
import { DessertSection } from "./dessert-section";
import { NumberedList } from "./numbered-list";
import { SectionHeader } from "./section-header";
import { normalizeSignatureDish, normalizeMenuItem } from "./types";

export function For4Booklet() {
  const d = signatureSetFor4;
  return (
    <Booklet id="cq_signature_for_4" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader eyebrow="Shared at the table" helper={`All included`} />
        <NumberedList items={d.included.map(normalizeSignatureDish)} />
      </section>

      {/* Connector — separates the included list from the choose-ones */}
      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="bg-gold/25 h-px flex-1" />
        <span className="font-bricolage-grotesque border-gold/40 bg-darkest-wine text-light-gold rounded-full border px-4 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase">
          Plus, for the table
        </span>
        <span className="bg-gold/25 h-px flex-1" />
      </div>

      <section>
        <SectionHeader eyebrow="Noodle Soup" helper="Choose 1" />
        <p className="text-secondary mb-5 text-sm leading-relaxed">{d.noodleSoupIntro}</p>
        <NumberedList items={classicNoodleSoup.map(normalizeMenuItem)} />
      </section>

      <section>
        <SectionHeader eyebrow="Signature Entrée" helper="Choose 1" />
        <NumberedList items={d.entreeChoices.map(normalizeSignatureDish)} columns={3} />
      </section>

      <DessertSection count={2} />
    </Booklet>
  );
}
