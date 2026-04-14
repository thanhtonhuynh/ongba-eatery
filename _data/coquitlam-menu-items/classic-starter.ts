import { MenuItem } from "@/_types";

export const classicStarter: MenuItem[] = [
  {
    id: "cq_spring_roll",
    category: "cq_classic_starter",
    title: "Chả Nem",
    subtitle: "Spring Roll",
    description:
      "Pork or veggie (V).\nLettuce, herbs, pickled daikon and carrot.\nSauce: fish sauce / sweet chili.",
    price: 14,
    dietary: ["vegetarian"],
  },
  {
    id: "cq_salad_roll",
    category: "cq_classic_starter",
    title: "Gỏi Cuốn",
    subtitle: "Salad Roll",
    description:
      "Chicken / Shrimp / Tofu (V)\nRice paper, lettuce, cucumber, herbs, vermicelli, pickles daikon and carrot.\nSauce: peanut sauce (peanut) / sweet Thai chili / fish sauce.\nAdd Avocado: $4",
    price: 15,
    dietary: ["seafood", "vegetarian", "peanut"],
  },
  {
    id: "cq_fish_sauce_wings",
    category: "cq_classic_starter",
    title: "Cánh Gà Chiên Mắm",
    subtitle: "Fish Sauce Glazed Chicken Wings",
    description: "Lightly battered wings, fish sauce glaze.",
    price: 16,
  },
];
