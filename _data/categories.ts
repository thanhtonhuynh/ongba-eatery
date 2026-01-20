import { MenuCategory } from "@/_types";

export const categories: MenuCategory[] = [
  { key: "chef_specialty", title: "Chef's Specialty" },
  { key: "appetizer", title: "Appetizer" },
  {
    key: "salad_rolls",
    title: "Salad Rolls",
    description:
      "Rice paper wrap filled with lettuce, cucumber, basil, carrot, pickled veggies, cilantro, crispy onions, vermicelli\n2 rolls / order, served with peanut sauce",
    addOns: [{ title: "Avocado", price: 3 }],
  },
  {
    key: "banh_mi",
    title: "Bánh Mì",
    description:
      "Filled with lettuce, cucumber, cilantro, pickled veggies, crispy onions\nSauce: regular mayo | curry mayo | vegan mayo\nSpicy level: no spicy | medium spicy | extra spicy",
    addOns: [
      { title: "Avocado", price: 3 },
      { title: "Fried egg", price: 3 },
      { title: "Pate", price: 3 },
      { title: "Tater tots", price: 4 },
    ],
  },
  {
    key: "noodle_soup",
    title: "Noodle Soup",
    description: "Served with beansprouts, basil, lime",
    addOns: [
      { title: "Sous vide egg", price: 3 },
      { title: "Quẩy donut", price: 3 },
      { title: "Extra veggie/soup", price: 5 },
      { title: "Extra meat/tofu", price: 6 },
    ],
  },
  {
    key: "rice_and_vermicelli",
    title: "Rice And Vermicelli",
    description: "Choice: rice or vermicelli",
    addOns: [
      { title: "Fried egg", price: 3 },
      { title: "Tater tots", price: 4 },
      { title: "Spring roll", price: 4.5 },
      { title: "Extra meat/tofu", price: 6 },
      { title: "Extra veggie", price: 5 },
    ],
  },
  { key: "drink", title: "Beverages" },
  { key: "desserts", title: "Desserts" },
];
