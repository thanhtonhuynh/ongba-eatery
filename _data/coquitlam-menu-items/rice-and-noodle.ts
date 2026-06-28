import { MenuItem } from "@/_types";

export const riceAndNoodle: MenuItem[] = [
  {
    id: "cq_coconut_curry",
    category: "cq_rice_and_noodle",
    title: "Cà Ri Cốt Dừa",
    subtitle: "Coconut Curry",
    description:
      "Choice of: chicken or tofu (V)\nChoice of: rice or vermicelli\nPotato, carrot, eggplant, lotus root, king oyster mushroom, basil, peanut.",
    price: 21,
    dietary: ["peanut"],
  },
  {
    id: "cq_grilled_lemongrass_chicken",
    category: "cq_rice_and_noodle",
    title: "Gà Xả Nướng",
    subtitle: "Grilled Lemongrass Chicken",
    description:
      "Choice of: rice or vermicelli.\nSauce: fish sauce or Bà's soy sauce\nSunny side up egg, cucumber tomato salad, pickled daikon and carrot, crispy onion, peanuts.",
    price: 21,
    dietary: ["gluten", "peanut"],
  },
];
