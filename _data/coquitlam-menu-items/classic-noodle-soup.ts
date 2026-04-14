import { MenuItem } from "@/_types";

export const classicNoodleSoup: MenuItem[] = [
  {
    id: "cq_wok_smokey_beef_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Tái Lăn",
    subtitle: "Wok Smokey Beef Pho",
    description:
      "12 hours beef broth, Wok-seared AAA beef, beef brisket. Green onion, cilantro, and grated ginger.",
    price: 19,
  },
  {
    id: "cq_classic_beef_pho",
    category: "cq_classic_noodle_soup",
    title: "Tái Nạm Bò Viên",
    subtitle: "Classic Beef Pho",
    description:
      "12-hour beef broth, AAA beef, beef brisket, beef ball. Green onions, cilantro and grated ginger.",
    price: 19,
  },
  {
    id: "cq_traditional_chicken_soup",
    category: "cq_classic_noodle_soup",
    title: "Gà Truyền Thống",
    subtitle: "Traditional Chicken Soup",
    description: "Chicken simmered in broth, quail egg. Green onion and cilantro.",
    price: 18,
  },
  {
    id: "cq_soupless_chicken_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Gà Trộn",
    subtitle: "Soupless Chicken Pho",
    description:
      "Dry noodle in garlic oil and BA's soy sauce. Chicken simmered in broth, quail eggs. Mint, cilantro crispy garlic. Side chicken soup.",
    price: 18,
    dietary: ["gluten"],
  },
  {
    id: "cq_bun_bo_hue",
    category: "cq_classic_noodle_soup",
    title: "Bun Bo Hue",
    subtitle: "Hue's Beef Noodle Vermicelli",
    description:
      "Spicy lemongrass beef broth, AAA beef, beef brisket, beef ball, pork sausage. Thick vermicelli. Green onions and cilantro.",
    price: 20,
    dietary: ["spicy"],
  },
  {
    id: "cq_vegan_pho",
    category: "cq_classic_noodle_soup",
    title: "Phở Chay",
    subtitle: "Vegan Pho",
    description:
      "Seasonal veggie stock, tofu, carrots, lotus roots, king oyster mushrooms, seasonal veggie. Topped with green onions, cilantro, and crispy onion.",
    price: 18,
    dietary: ["vegetarian"],
  },
];
