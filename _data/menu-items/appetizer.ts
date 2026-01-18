import { MenuItem } from "@/_types";

export const appetizer: MenuItem[] = [
  {
    id: "cha_gio",
    category: "appetizer",
    title: "Chả Giò",
    subtitle: "Spring Rolls",
    description: "Choice: pork / veggie\nSauce: fish sauce / vegan fish sauce / Thai chili sauce",
    price: 13,
    imgSrc: "/menu/appetizer/cha_gio.png",
    dietary: ["gluten", "pork", "vegetarian"],
  },
  {
    id: "banh_goi",
    category: "appetizer",
    title: "Bánh Gối",
    subtitle: "Mini Pillow Cakes",
    description:
      "Crispy fried pocket filled with pork, shitake mushroom & quail egg\nSauce: fish sauce / Thai chili sauce",
    price: 11,
    imgSrc: "/menu/appetizer/banh_goi.png",
    dietary: ["gluten", "pork"],
    badge: "best_seller",
  },
  {
    id: "nam_chien",
    category: "appetizer",
    title: "Nấm Chiên",
    subtitle: "Deep Fried Assorted Mushrooms",
    description: "Enoki mushroom, oyster mushrooms",
    price: 11,
    imgSrc: "/menu/appetizer/nam_chien.png",
    dietary: ["vegetarian"],
    badge: "best_seller",
  },
  {
    id: "chicken_wings",
    category: "appetizer",
    title: "Cánh Gà Chiên Nước Mắm",
    subtitle: "Fish Sauce Glazed Wings",
    description: "Light battered deep fried chicken wings covered with fish sauce glaze",
    price: 15,
    imgSrc: "/menu/appetizer/chicken_wings.png",
    dietary: ["chicken"],
    badge: "best_seller",
  },
  {
    id: "goi_du_du",
    category: "appetizer",
    title: "Gỏi Đu Đủ",
    subtitle: "Papaya Salad",
    description:
      "Topped with crispy onions, toasted peanuts & basil\nChoice: prawns / tofu\nContains fish sauce",
    price: 10,
    imgSrc: "/menu/appetizer/goi_du_du.png",
    dietary: ["peanut"],
  },
];
