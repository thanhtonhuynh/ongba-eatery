import { coquitlamDesserts } from "@/_data/coquitlam-desserts-drinks";
import { NumberedList } from "./numbered-list";
import { SectionHeader } from "./section-header";
import { normalizeMenuItem } from "./types";

type Props = {
  count: 1 | 2;
};

export function DessertSection({ count }: Props) {
  return (
    <section>
      <SectionHeader eyebrow="Dessert" helper={count === 2 ? "Choose 2" : "Choose 1"} />
      <NumberedList items={coquitlamDesserts.map(normalizeMenuItem)} />
    </section>
  );
}
