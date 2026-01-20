import { MenuItem } from "@/_types";
import { appetizer } from "./appetizer";
import { banh_mi } from "./banh-mi";
import { chefSpecialty } from "./chef-specialty";
import { desserts } from "./dessert";
import { drinks } from "./drinks";
import { noodle_soup } from "./noodle-soup";
import { rice_and_vermicelli } from "./rice-and-vermicelli";
import { salad_rolls } from "./salad_rolls";

export const menuItems: MenuItem[] = [
  ...chefSpecialty,
  ...appetizer,
  ...salad_rolls,
  ...banh_mi,
  ...noodle_soup,
  ...rice_and_vermicelli,
  ...drinks,
  ...desserts,
];
