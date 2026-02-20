import { CoquitlamMenuCategory } from "@/_types";

export const coquitlamCategories: CoquitlamMenuCategory[] = [
  { key: "cq_signature_starter", title: "Signature Starter" },
  {
    key: "cq_classic_starter",
    title: "Classic Starter",
    // addOns: [{ title: "Avocado", price: 4 }],
  },
  {
    key: "cq_banh_mi",
    title: "In House Fresh Baked Banh Mi",
    description:
      "Fresh baked banh mi daily filled with lettuce, cucumber, cilantro, pickles daikon carrot\nRegular Mayo or Curry Mayo\nNo spicy | Medium spicy | Spicy",
    addOns: [
      { title: "French Fries", price: 4 },
      { title: "Avocado", price: 4 },
      { title: "Extra Meat", price: 5 },
      { title: "Extra Pate", price: 3 },
    ],
  },
  {
    key: "cq_signature_entree",
    title: "Signature Entrée",
  },
  {
    key: "cq_classic_noodle_soup",
    title: "Classic Noodle Soup",
    addOns: [
      { title: "Crispy Chinese Donut", price: 3 },
      { title: "Sous Vide Egg", price: 4 },
      { title: "Extra Veggie", price: 5 },
      { title: "Extra Meat", price: 6 },
    ],
  },
  {
    key: "cq_rice_and_noodle",
    title: "Rice and Noodle",
    addOns: [
      { title: "Spring Roll", price: 4 },
      { title: "Fried Egg", price: 4 },
      { title: "Extra Rice/Vermicelli", price: 4 },
    ],
  },
];
