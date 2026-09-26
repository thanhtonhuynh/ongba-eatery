import { MenuItem } from "@/_types";

export const classicNoodleSoup: MenuItem[] = [
  {
    id: "cq_wok_smokey_beef_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Tái Lăn",
    subtitle: "Wok Smokey Beef Pho",
    description: "Beef broth, Wok-seared AAA rare beef, beef brisket, bone marrow.",
    price: 23,
  },
  {
    id: "cq_bun_bo_hue",
    category: "cq_classic_noodle_soup",
    title: "Bún Bò Huế",
    subtitle: "Hue's Spicy Beef Vermicelli",
    description:
      "Spicy lemongrass beef broth, AAA rare beef, brisket, pork sausage, pork knuckle, thick vermicelli.",
    price: 22,
    dietary: ["spicy"],
  },
  {
    id: "cq_soupless_chicken_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Trộn",
    subtitle: "Soupless Chicken Pho",
    description:
      "Served with side chicken broth.\nAdd Truffle Sauce: $3\nGarlic oil noodles, Bà's soy sauce, poached free range chicken, quail eggs, herbs, crispy garlic, toasted peanut.",
    price: 21,
    dietary: ["gluten", "peanut"],
  },
  {
    id: "cq_traditional_chicken_soup",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Truyền Thống",
    subtitle: "Traditional Chicken Pho",
    description: "Chicken broth, poached free range chicken, quail eggs.",
    price: 20,
  },
];
