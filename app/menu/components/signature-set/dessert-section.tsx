import { coquitlamDesserts } from "@/_data/coquitlam-menu-items/desserts";
import { DishList } from "./dish-list";
import { SectionHeader } from "./section-header";
import { normalizeMenuItem } from "./types";

type Props = {
  /** How many desserts the set includes, shown as a chip next to the title (e.g. "Choice of 1"). */
  choiceLine: string;
};

export function DessertSection({ choiceLine }: Props) {
  const items = coquitlamDesserts.map(normalizeMenuItem);
  return (
    <section>
      <SectionHeader title="Dessert" helper={choiceLine} />
      <DishList items={items} />
    </section>
  );
}
