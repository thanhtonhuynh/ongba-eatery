export type DrinkItem = {
  id: string;
  title: string;
  /** Vietnamese name, shown in italics under the title. */
  subtitle?: string;
  /** Ingredients, e.g. "Avocado · Pandan · Coconut Milk". */
  description?: string;
  /** Tasting notes, e.g. "Creamy · Tropical · Fragrant". */
  notes?: string;
  /** Upsell line, e.g. "Add Stealth Vodka or Beefeater Gin shot +$6". */
  addOn?: string;
  price: number;
};

export type WineItem = {
  id: string;
  name: string;
  /** Appellation, omitted for house pours. */
  region?: string;
  /** By-the-glass (6oz) price. */
  glass?: number;
  /** Bottle price. Omitted when the wine is glass-only. */
  bottle?: number;
};

export type BeerItem = {
  id: string;
  name: string;
  /** Style + size + ABV descriptor, e.g. "Hazy Pale Ale · 473mL · 5%". */
  style?: string;
  /** Per-item price, used when a group prices items individually (e.g. Can). */
  price?: number;
};

export type BeerGroup = {
  label: string;
  subLabel?: string;
  /** Flat price for the whole group (e.g. On Tap). Omit when items are priced individually. */
  price?: number;
  items: BeerItem[];
};
