import { MenuItem } from "@/_types";

export const classicNoodleSoup: MenuItem[] = [
  {
    id: "cq_wok_smokey_beef_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Tái Lăn",
    subtitle: "Wok Smokey Beef Pho",
    description: "12 hours beef broth, Wok-seared AAA Chuck Eye, beef brisket, grated ginger.",
    price: 20,
  },
  {
    id: "cq_classic_beef_pho",
    category: "cq_classic_noodle_soup",
    title: "Tái Nạm Bò Viên",
    subtitle: "Classic Beef Pho",
    description: "12-hour beef broth, AAA Chuck Eye, brisket, beef ball, grated ginger.",
    price: 19,
  },
  {
    id: "cq_traditional_chicken_soup",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Truyền Thống",
    subtitle: "Traditional Chicken Pho",
    description: "Chicken broth, poached chicken, quail eggs.",
    price: 18,
  },
  {
    id: "cq_soupless_chicken_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Trộn",
    subtitle: "Soupless Chicken Pho",
    description:
      "Garlic oil noodles, Ba's soy sauce, chicken, quail eggs, herbs, crispy garlic.\nServed with side chicken broth.\nAdd Truffle Sauce: $3",
    price: 19,
    dietary: ["gluten"],
  },
  {
    id: "cq_bun_bo_hue",
    category: "cq_classic_noodle_soup",
    title: "Bún Bò Huế",
    subtitle: "Hue's Spicy Beef Vermicelli",
    description:
      "Spicy lemongrass broth, AAA chuck eye, brisket, beef ball, pork sausage, thick vermicelli.",
    price: 20,
    dietary: ["spicy"],
  },
  {
    id: "cq_vegan_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Chay",
    subtitle: "Vegan Pho",
    description: "Vegetable broth, tofu, lotus root, king oyster mushroom, seasonal vegetables.",
    price: 19,
    dietary: ["vegetarian"],
  },
];
