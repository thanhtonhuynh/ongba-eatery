import { MenuCategory } from "@/_types";

export const categories: MenuCategory[] = [
  { key: "chef_specialty", title: "Chef's Specialty" },
  { key: "appetizer", title: "Appetizer" },
  {
    key: "salad_rolls",
    title: "Salad Rolls",
    description:
      "Rice paper wrap filled with lettuce, cucumber, basil, carrot, pickled veggies, cilantro, crispy onions, vermicelli\n2 rolls / order, served with peanut sauce",
  },
  {
    key: "banh_mi",
    title: "Bánh Mì",
    description:
      "Filled with lettuce, cucumber, cilantro, pickled veggies, crispy onions\nSauce: regular mayo | curry mayo | vegan mayo\nSpicy level: no spicy | medium spicy | extra spicy",
  },
  { key: "noodle_soup", title: "Noodle Soup", description: "Served with beansprouts, basil, lime" },
  {
    key: "rice_and_vermicelli",
    title: "Rice And Vermicelli",
    description: "Choice: rice or vermicelli",
  },
  { key: "drink", title: "Beverages" },
  { key: "dessert", title: "Desserts" },
];
