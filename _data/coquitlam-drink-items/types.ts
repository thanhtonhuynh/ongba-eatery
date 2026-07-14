export type WineItem = {
  id: string;
  name: string;
  region: string;
  varietal: string;
  /** By-the-glass (6oz) price. Omitted when the wine is bottle-only. */
  glass?: number;
  /** Bottle price. */
  bottle: number;
};

export type WineGroup = {
  label: string;
  items: WineItem[];
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
