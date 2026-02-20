import { coquitlamMenuItems } from "@/_data/coquitlam-menu-items";
import { CoquitlamMenuCategoryKey, MenuItem } from "@/_types";

export const coquitlamItemsById: Record<string, MenuItem> = Object.fromEntries(
  coquitlamMenuItems.map((item) => [item.id, item]),
);

export const coquitlamItemsByCategory: Partial<
  Record<CoquitlamMenuCategoryKey, MenuItem[]>
> = Object.groupBy(coquitlamMenuItems, (item) => item.category);
