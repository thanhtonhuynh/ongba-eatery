import { MenuItem } from "@/_types";

export const noodle_soup: MenuItem[] = [
  {
    id: "trio_pho",
    category: "noodle_soup",
    title: "Phở Đặc Biệt",
    subtitle: "Trio Beef Phở",
    description:
      "12-hour beef broth, AAA rare beef, brisket, beef ball, and topped with grated ginger",
    price: 19,
    imgSrc: "/menu/noodle-soup/trio_pho.png",
    dietary: ["beef"],
  },
  {
    id: "pho_ga_tron",
    category: "noodle_soup",
    title: "Phở Gà Trộn",
    subtitle: "Soupless Chicken Phở",
    description:
      "Chicken simmered in broth over Phở in Bà's soy sauce, topped with mint, chiffonade lime leaves, crispy onions, and toasted peanuts\nServed with chicken broth on the side and quail eggs",
    price: 18,
    imgSrc: "/menu/noodle-soup/pho_ga_tron.png",
    dietary: ["gluten", "chicken", "peanut"],
    badge: "best_seller",
  },
  {
    id: "pho_ga_truyen_thong",
    category: "noodle_soup",
    title: "Phở Gà Truyền Thống",
    subtitle: "Traditional Chicken Phở",
    description: "Chicken simmered in broth, quail eggs, and topped with chiffonade lime leaves",
    price: 18,
    imgSrc: "/menu/noodle-soup/pho_ga_truyen_thong.png",
    dietary: ["chicken"],
  },
  {
    id: "pho_ga_nuong_xa",
    category: "noodle_soup",
    title: "Phở Gà Nướng Xả",
    subtitle: "Grilled Chicken Phở",
    description:
      "Chicken broth, napa cabbage, carrots, broccoli, grilled lemongrass chicken, topped with crispy onions",
    price: 18,
    imgSrc: "/menu/noodle-soup/pho_ga_nuong_xa.png",
    dietary: ["chicken"],
    badge: "best_seller",
  },
  {
    id: "pho_chay",
    category: "noodle_soup",
    title: "Phở Chay",
    subtitle: "Vegan Phở",
    description:
      "Seasonal veggie stock, broccoli, napa cabbage, tofu, carrots, lotus roots and king oyster mushrooms",
    price: 17,
    imgSrc: "/menu/noodle-soup/pho_chay.png",
    dietary: ["vegetarian"],
    badge: "best_seller",
  },
  {
    id: "wonton_pho",
    category: "noodle_soup",
    title: "Phở Hoành Thánh",
    subtitle: "Wonton Phở",
    description:
      "Chicken broth, shrimps, wonton filled with pork and shrimp, carrots, napa cabbage, broccoli",
    price: 18,
    imgSrc: "/menu/noodle-soup/wonton_pho.png",
    dietary: ["gluten", "pork", "seafood"],
  },
  {
    id: "bun_bo_hue",
    category: "noodle_soup",
    title: "Bún Bò Huế",
    description:
      "Spicy lemongrass broth, AAA rare beef, brisket, slow-cooked Viet ham and pork ham",
    price: 19,
    imgSrc: "/menu/noodle-soup/bun_bo_hue.png",
    dietary: ["gluten", "beef", "pork", "spicy"],
  },
];
