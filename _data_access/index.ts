import { menuItems } from "@/_data/menu-items";
import { MenuCategoryKey, MenuItem } from "@/_types";

export const itemsById: Record<string, MenuItem> = Object.fromEntries(
  menuItems.map((item) => [item.id, item]),
);

// Items by category
export const itemsByCategory: Partial<Record<MenuCategoryKey, MenuItem[]>> = Object.groupBy(
  menuItems,
  (item) => item.category,
);
