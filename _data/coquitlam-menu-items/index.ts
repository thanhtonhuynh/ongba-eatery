import { MenuItem } from "@/_types";
import { banhMi } from "./banh-mi";
import { classicNoodleSoup } from "./classic-noodle-soup";
import { classicStarter } from "./classic-starter";
import { riceAndNoodle } from "./rice-and-noodle";
import { signatureEntree } from "./signature-entree";
import { signatureStarter } from "./signature-starter";

export const coquitlamMenuItems: MenuItem[] = [
  ...signatureStarter,
  ...classicStarter,
  ...banhMi,
  ...signatureEntree,
  ...classicNoodleSoup,
  ...riceAndNoodle,
];
