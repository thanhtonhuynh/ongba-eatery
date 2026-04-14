import { MenuItem } from "@/_types";

export const banhMi: MenuItem[] = [
  {
    id: "cq_traditional_ham_banh_mi",
    category: "cq_banh_mi",
    title: "Traditional Ham",
    description: "Filled with pate, traditional cold cuts, pork sausage, fried pork sausage.",
    price: 14,
    dietary: ["gluten"],
  },
  {
    id: "cq_grilled_chicken_banh_mi",
    category: "cq_banh_mi",
    title: "Grilled Chicken",
    description: "Filled with pate and grilled lemongrass chicken.",
    price: 14,
    dietary: ["gluten"],
  },
  {
    id: "cq_tofu_banh_mi",
    category: "cq_banh_mi",
    title: "Tofu",
    description: "Filled with Fried velvety lemongrass tofu.",
    price: 13,
    dietary: ["gluten", "vegetarian"],
  },
];
