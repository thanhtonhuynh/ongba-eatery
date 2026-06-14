import { type SignatureSetDish } from "@/_data/coquitlam-signature-set";
import { type DietaryTag, type MenuItem } from "@/_types";

export type NormalizedDish = {
  key: string;
  titleEn?: string;
  titleVi: string;
  description?: string;
  dietary?: DietaryTag[];
};

export function normalizeSignatureDish(dish: SignatureSetDish): NormalizedDish {
  return {
    key: dish.titleEn,
    titleEn: dish.titleEn,
    titleVi: dish.titleVi,
    description: dish.description,
    dietary: dish.dietary,
  };
}

export function normalizeMenuItem(item: MenuItem): NormalizedDish {
  return {
    key: item.id,
    titleEn: item.subtitle ?? item.title,
    titleVi: item.title,
    description: item.description,
    dietary: item.dietary,
  };
}
