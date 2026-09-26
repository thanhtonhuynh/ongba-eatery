import { MenuItem } from "@/_types";
import { banhMi } from "./banh-mi";
import { classicNoodleSoup } from "./classic-noodle-soup";
import { coquitlamDesserts } from "./desserts";
import { entrees } from "./entrees";
import { riceAndNoodle } from "./rice-and-noodle";
import { saladRolls } from "./salad-rolls";
import { starters } from "./starters";

export const coquitlamMenuItems: MenuItem[] = [
  ...starters,
  ...saladRolls,
  ...banhMi,
  ...riceAndNoodle,
  ...entrees,
  ...classicNoodleSoup,
  ...coquitlamDesserts,
];
