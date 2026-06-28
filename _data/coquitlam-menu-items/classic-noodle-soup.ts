import { MenuItem } from "@/_types";

export const classicNoodleSoup: MenuItem[] = [
  {
    id: "cq_wok_smokey_beef_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Tái Lăn",
    subtitle: "Wok Smokey Beef Pho",
    description:
      "12 hours beef broth, Wok-seared AAA rare beef, beef brisket, beef balls, bone marrow, grated ginger.",
    price: 22,
  },
  {
    id: "cq_soupless_chicken_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Trộn",
    subtitle: "Soupless Chicken Pho",
    description:
      "Garlic oil noodles, Bà's soy sauce, poached free range chicken, quail eggs, herbs, crispy garlic, toasted peanut.\nServed with side chicken broth.\nAdd Truffle Sauce: $3",
    price: 20,
    dietary: ["gluten", "peanut"],
  },
  {
    id: "cq_traditional_chicken_soup",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Truyền Thống",
    subtitle: "Traditional Chicken Pho",
    description: "Chicken broth, poached free range chicken, quail eggs.",
    price: 19,
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
    id: "cq_vegan_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Chay",
    subtitle: "Vegan Pho",
    description: "Vegetable broth, tofu, lotus root, king oyster mushroom, seasonal vegetables.",
    price: 20,
    dietary: ["vegetarian"],
  },
];
