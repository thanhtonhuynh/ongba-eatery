import { AddOnItem, CoquitlamMenuSection } from "@/_types";

// Brunch and dinner share many dishes, so sections list item ids and each dish is defined once in
// `coquitlam-menu-items`. Item order matches the paper menus, read left-to-right.

const riceAndNoodleAddOns: AddOnItem[] = [
  { title: "Spring Roll", price: 6 },
  { title: "Fried Egg", price: 5 },
  { title: "Extra Rice/Vermicelli", price: 4 },
];

const phoAddOns: AddOnItem[] = [
  { title: "Quẩy Donut", price: 3 },
  { title: "Sous Vide Egg", price: 5 },
  { title: "Bone Marrow", price: 6 },
  { title: "Extra Meat", price: 7 },
];

const brothNote =
  "We recommend Chilli Garlic Vinegar to bring brightness to the broth. If you prefer lime, please let our servers know!";

export const brunchMenu: CoquitlamMenuSection[] = [
  {
    key: "cq_brunch_starter",
    title: "Starter",
    itemIds: [
      "cq_spring_roll",
      "cq_mini_banh_mi_pate",
      "cq_fish_sauce_wings",
      "cq_squid_papaya_salad",
      "cq_scallion_crispy_tofu",
      "cq_coconut_curry_mussel",
    ],
  },
  {
    key: "cq_brunch_salad_rolls",
    title: "Salad Rolls",
    description:
      "Filled with lettuce, cucumber, vermicelli, herbs, pickled daikon, carrot.\nSauce: peanut sauce or fish sauce.",
    itemIds: ["cq_chicken_salad_roll", "cq_pork_jowl_salad_roll", "cq_tofu_salad_roll"],
  },
  {
    key: "cq_brunch_banh_mi",
    title: "In House Fresh Baked Banh Mi",
    description:
      "Fresh baked daily banh mi, come with side of pho broth. Filled with cucumber, cilantro, pickled daikon and carrot, jalapeño.",
    addOns: [
      { title: "Tater Tots", price: 5 },
      { title: "Avocado", price: 4 },
      { title: "Extra Pate", price: 3 },
      { title: "Fried Egg", price: 4 },
    ],
    itemIds: ["cq_pork_jowl_banh_mi", "cq_porchetta_banh_mi", "cq_grilled_chicken_banh_mi"],
  },
  {
    key: "cq_brunch_rice_and_noodle",
    title: "Rice & Noodle",
    addOns: riceAndNoodleAddOns,
    itemIds: ["cq_coconut_curry", "cq_grilled_lemongrass_chicken"],
  },
  {
    key: "cq_brunch_entree",
    title: "Entrée",
    itemIds: [
      "cq_ba_pork_chop",
      "cq_bun_cha_ha_noi",
      "cq_tomato_spicy_fish_vermicelli",
      "cq_beef_rib_pho",
      "cq_tomato_meatball_sizzling_plate",
      "cq_bo_ne",
    ],
  },
  {
    key: "cq_brunch_classic_noodle_soup",
    title: "Classic Noodle Soup",
    description: `All Pho noodle soups topped with green onions, cilantro and come with side of beansprout, basil, and pickled onion.\n${brothNote}`,
    addOns: phoAddOns,
    itemIds: [
      "cq_wok_smokey_beef_pho",
      "cq_bun_bo_hue",
      "cq_soupless_chicken_pho",
      "cq_traditional_chicken_soup",
    ],
  },
  {
    key: "cq_brunch_dessert",
    title: "Dessert",
    itemIds: [
      "cq_vietnamese_coffee_flan",
      "cq_coffee_panna_cotta",
      "cq_banana_trifle",
      "cq_pandan_coconut_pavlova",
    ],
  },
];

export const dinnerMenu: CoquitlamMenuSection[] = [
  {
    key: "cq_dinner_starter",
    title: "Starter",
    itemIds: [
      "cq_spring_roll",
      "cq_mini_banh_mi_pate",
      "cq_fish_sauce_wings",
      "cq_squid_papaya_salad",
      "cq_scallion_crispy_tofu",
      "cq_coconut_curry_mussel",
      "cq_butter_beef_tartare",
      "cq_shrimp_ceviche_stack",
      "cq_pork_belly_caesar_salad",
      "cq_tomato_meatball",
    ],
  },
  {
    key: "cq_dinner_rice_and_noodle",
    title: "Rice & Noodle",
    addOns: riceAndNoodleAddOns,
    itemIds: ["cq_coconut_curry", "cq_grilled_lemongrass_chicken"],
  },
  {
    key: "cq_dinner_entree",
    title: "Entrée",
    // Dinner has no noodle soup section, so the pho add-ons sit here as text rather than as
    // section add-ons, which would read as applying to every entrée.
    description: `Pho add-ons: ${phoAddOns.map((a) => `${a.title} $${a.price}`).join(", ")}.\n${brothNote}`,
    itemIds: [
      "cq_ba_pork_chop",
      "cq_wagyu_steak",
      "cq_grilled_turmeric_fish",
      "cq_beef_ragu_pappardelle",
      "cq_tomato_spicy_fish_vermicelli",
      "cq_bun_cha_ha_noi",
      "cq_wok_smokey_beef_pho",
      "cq_beef_rib_pho",
    ],
  },
  {
    key: "cq_dinner_dessert",
    title: "Dessert",
    itemIds: [
      "cq_vietnamese_coffee_flan",
      "cq_coffee_panna_cotta",
      "cq_banana_trifle",
      "cq_pandan_coconut_pavlova",
    ],
  },
];
