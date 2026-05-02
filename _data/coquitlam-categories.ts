import { CoquitlamMenuCategory } from "@/_types";

export const coquitlamCategories: CoquitlamMenuCategory[] = [
  { key: "cq_signature_starter", title: "Signature Starter", note: "Dine-in only" },
  {
    key: "cq_classic_starter",
    title: "Classic Starter",
  },
  {
    key: "cq_signature_entree",
    title: "Signature Entrée",
    note: "Dine-in only",
  },
  {
    key: "cq_classic_noodle_soup",
    title: "Classic Noodle Soup",
    description:
      "All Pho noodle soups topped with green onions, cilantro and come with side of beansprout, basil, and pickle onion.\nWe recommend Chilli Garlic Vinegar to bring brightness to the broth. If you prefer lime, please let our servers know!",
    addOns: [
      { title: "Quẩy Donut", price: 3 },
      { title: "Sous Vide Egg", price: 4 },
      { title: "Extra Veggie", price: 5 },
      { title: "Extra Meat", price: 7 },
      { title: "Bone Marrow", price: 4 },
    ],
  },
  {
    key: "cq_rice_and_noodle",
    title: "Rice and Noodle",
    addOns: [
      { title: "Spring Roll", price: 5 },
      { title: "Fried Egg", price: 4 },
      { title: "Extra Rice/Vermicelli", price: 4 },
    ],
  },
  {
    key: "cq_banh_mi",
    title: "In House Fresh Baked Banh Mi",
    note: "Lunch only",
    description:
      "Fresh baked daily. Cucumber, cilantro, pickled daikon, and carrot.\nRegular Mayo or Curry Mayo",
    addOns: [
      { title: "French Fries", price: 4 },
      { title: "Avocado", price: 4 },
      { title: "Extra Meat", price: 5 },
      { title: "Extra Pate", price: 3 },
      { title: "Fried Egg", price: 4 },
    ],
  },
];
