import { menuItems } from "@/_data/menu-items";
import { products } from "@/_data/products";
import { MenuCategoryKey, MenuItem, Product } from "@/_types";

export const itemsById: Record<string, MenuItem> = Object.fromEntries(
  menuItems.map((item) => [item.id, item]),
);

// Items by category
export const itemsByCategory: Partial<Record<MenuCategoryKey, MenuItem[]>> = Object.groupBy(
  menuItems,
  (item) => item.category,
);

// Products by category
export const productsByCategory = Object.groupBy(
  products,
  (product) => product.category,
) satisfies Partial<Record<string, Product[]>>;
