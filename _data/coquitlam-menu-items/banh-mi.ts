import { MenuItem } from "@/_types";

export const banhMi: MenuItem[] = [
  {
    id: "cq_grilled_chicken_banh_mi",
    category: "cq_banh_mi",
    title: "Gà Nướng Xả",
    subtitle: "Grilled Chicken",
    description: "Pate, grilled lemongrass chicken.",
    price: 14,
    dietary: ["gluten"],
  },
  {
    id: "cq_traditional_ham_banh_mi",
    category: "cq_banh_mi",
    title: "Chả và Trứng Rán",
    subtitle: "OG Egg and Ham",
    description: "Pâté, scallion omelette, Vietnamese hams.",
    price: 13,
    dietary: ["gluten"],
  },
  {
    id: "cq_tofu_banh_mi",
    category: "cq_banh_mi",
    title: "Đậu Phụ Chiên Xả và Bơ",
    subtitle: "Tofu Avocado",
    description: "Velvety fried lemongrass tofu and avocado.",
    price: 13,
    dietary: ["gluten", "vegetarian"],
  },
];
