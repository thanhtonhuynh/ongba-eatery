export type MenuCategoryKey =
  | "chef_specialty"
  | "appetizer"
  | "salad_rolls"
  | "banh_mi"
  | "noodle_soup"
  | "rice_and_vermicelli"
  | "drink"
  | "dessert";

export type MenuBadge = "new" | "best_seller";

export const BADGE_META: Record<MenuBadge, { label: string; iconSrc?: string; sr: string }> = {
  new: { label: "New", sr: "New menu item" },
  best_seller: { label: "Best Seller", iconSrc: "/best_seller.svg", sr: "Best selling menu item" },
};

export type DietaryTag =
  | "beef"
  | "chicken"
  | "pork"
  | "seafood"
  | "gluten"
  | "peanut"
  | "spicy"
  | "vegetarian"
  | "dairy";

export const DIETARY_META: Record<DietaryTag, { label: string; iconSrc: string }> = {
  beef: { label: "Beef", iconSrc: "/dietary/beef.svg" },
  chicken: { label: "Chicken", iconSrc: "/dietary/chicken.svg" },
  dairy: { label: "Dairy", iconSrc: "/dietary/dairy.svg" },
  gluten: { label: "Gluten", iconSrc: "/dietary/gluten.svg" },
  peanut: { label: "Peanut", iconSrc: "/dietary/peanut.svg" },
  pork: { label: "Pork", iconSrc: "/dietary/pork.svg" },
  seafood: { label: "Seafood", iconSrc: "/dietary/seafood.svg" },
  spicy: { label: "Spicy", iconSrc: "/dietary/spicy.svg" },
  vegetarian: { label: "Vegetarian", iconSrc: "/dietary/vegetarian.svg" },
};

export type MenuItem = {
  id: string;
  category: MenuCategoryKey;

  title: string;
  subtitle?: string;
  description?: string;

  price: number;
  imgSrc?: string;

  dietary?: DietaryTag[];
  badge?: MenuBadge;
};

export type MenuCategory = {
  key: MenuCategoryKey;
  title: string;
  description?: string;
};

export type Curated = {
  key: string;
  title: string;
  description?: string;
  items: MenuItem[];
};
