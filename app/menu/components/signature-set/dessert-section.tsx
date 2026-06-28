import { coquitlamDesserts } from "@/_data/coquitlam-menu-items/desserts";
import { ChoiceList } from "./choice-list";
import { DishList } from "./dish-list";
import { SectionHeader } from "./section-header";
import { normalizeMenuItem } from "./types";

type Props = {
  /** When true, desserts are a "choose 1" choice (rendered with "Or" between). */
  choice?: boolean;
};

export function DessertSection({ choice = false }: Props) {
  const items = coquitlamDesserts.map(normalizeMenuItem);
  return (
    <section>
      <SectionHeader title="Dessert" />
      {choice ? <ChoiceList items={items} /> : <DishList items={items} />}
    </section>
  );
}
