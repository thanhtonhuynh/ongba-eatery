import { coquitlamDesserts } from "@/_data/coquitlam-menu-items/desserts";
import { DishList } from "./dish-list";
import { SectionHeader } from "./section-header";
import { normalizeMenuItem } from "./types";

export function DessertSection() {
  return (
    <section>
      <SectionHeader title="Dessert" />
      <DishList items={coquitlamDesserts.map(normalizeMenuItem)} />
    </section>
  );
}
