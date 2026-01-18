import { itemsById } from "@/_data_access";
import { Curated } from "@/_types";

const featureItemIds = ["bun_bo_hue_rib", "tra_dao"];

export const featuredItems: Curated = {
  key: "features",
  title: "Features",
  items: featureItemIds.map((id) => itemsById[id]),
};
