import type { DietaryTag } from "@/_types";

export type FamilySetDish = {
  titleVi: string;
  titleEn: string;
  description?: string;
  dietary?: DietaryTag[];
};

export const familySetDisclaimer =
  "Our set menu is thoughtfully curated to be enjoyed as a complete experience.\nWe may be unable to accommodate modifications or substitutions.\nPlease inform our team of any allergies or dietary restrictions in advance.";

export const familySetFor2 = {
  heading: "Family Style Set",
  priceLine: "For 2 — $50 per person",
  firstCourse: {
    label: "1st course — choice of one",
    options: [
      {
        titleVi: "Tôm Bơ Tỏi Phô Mai",
        titleEn: "Cheesy Coconut Garlic Shrimp",
        description: "Garlic coconut sauce, mozzarella, toasted bánh mì.",
        dietary: ["seafood", "dairy"],
      },
      {
        titleVi: "Cánh Gà Chiên Mắm",
        titleEn: "Fish Sauce Glazed Chicken Wings",
        description: "Lightly battered wings, fish sauce glaze.",
      },
    ] satisfies FamilySetDish[],
  },
  secondCourse: {
    label: "2nd course — choice of one",
    options: [
      {
        titleVi: "Bò Tái Chanh Tartare",
        titleEn: "Butter Beef Tartare",
        description:
          "AAA beef, fish sauce dressing, Dijon, shallot, garlic, mint, basil, Vietnamese coriander, crispy garlic, peanuts. Served with taro chips.",
        dietary: ["peanut"],
      },
      {
        titleVi: "Salat Cà Chua Burrata",
        titleEn: "Ông's Garden Burrata Salad",
        description:
          "Tomato, cucumber, shallot, burrata cheese, Vietnamese dầu giấm vinaigrette, peanut.",
        dietary: ["peanut", "dairy"],
      },
    ] satisfies FamilySetDish[],
  },
  thirdCourse: {
    label: "3rd course",
    fixed: {
      titleVi: "Xôi Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Ba's Grilled Caramelized Pork Chop",
      description:
        "12oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil. Served with pickle papaya carrot and sticky rice.",
      dietary: ["gluten"],
    } satisfies FamilySetDish,
    oneOfLabel: "And one of:",
    oneOf: [
      {
        titleVi: "Bún Riêu Cua Lột",
        titleEn: "Tomato Soft Shell Crab Vermicelli",
        description:
          "Sweet-sour tomato seafood broth, deep fry soft shell crab, field crab paste, AAA chuck eye, thin vermicelli.",
        dietary: ["seafood"],
      },
      {
        titleVi: "Bún Chả Hà Nội Ủ Khói",
        titleEn: "Hà Nội Smoky Grilled Pork Vermicelli",
        description:
          "Smoked grilled pork jowl and pork patty, vermicelli, herbs, pickled papaya, umami fish sauce.",
      },
      {
        titleVi: "Mì Trứng Sốt Bò Kho",
        titleEn: "Beef Ragu Pappardelle",
        description:
          "Five spices beef ragu, roasted grape tomato, pappardelle, sous-vide egg, parmesan, cilantro.",
        dietary: ["gluten", "dairy"],
      },
    ] satisfies FamilySetDish[],
  },
  dessertLine: "Choice of 1 dessert",
};

export const familySetFor4 = {
  heading: "Family Style Set",
  priceLine: "For 4 — $50 per person",
  included: [
    {
      titleVi: "Pate Nấm Truffle",
      titleEn: "Truffle Duck Pate",
      description: "Duck and truffle pâté, ô-mai prune compote, toasted bánh mì.",
      dietary: ["gluten"],
    },
    {
      titleVi: "Bò Tái Chanh Tartare",
      titleEn: "Butter Beef Tartare",
      description:
        "AAA beef, fish sauce dressing, Dijon, shallot, garlic, mint, basil, Vietnamese coriander, crispy garlic, peanuts. Served with taro chips.",
      dietary: ["peanut"],
    },
    {
      titleVi: "Cánh Gà Chiên Mắm",
      titleEn: "Fish Sauce Glazed Chicken Wings",
      description: "Lightly battered wings, fish sauce glaze.",
    },
    {
      titleVi: "Salat Cà Chua Burrata",
      titleEn: "Ông's Garden Burrata Salad",
      description:
        "Tomato, cucumber, shallot, burrata cheese, Vietnamese dầu giấm vinaigrette, peanut.",
      dietary: ["peanut", "dairy"],
    },
    {
      titleVi: "Xôi Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Ba's Grilled Caramelized Pork Chop",
      description:
        "12oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil. Served with pickle papaya carrot and sticky rice.",
      dietary: ["gluten"],
    },
    {
      titleVi: "Vẹm Xanh Sốt Cà Ri Cốt Dừa",
      titleEn: "Coconut Curry Mussel with Fries",
      description:
        "Mussels in coconut curry broth, fresh herbs, pickled jalapeño. Served with fries.",
      dietary: ["seafood"],
    },
  ] satisfies FamilySetDish[],
  noodleSoupIntro: "Wok Smokey Beef Pho or any Classic Noodle Soup from our menu:",
  entreeChoiceIntro: "One of:",
  entreeChoices: [
    {
      titleVi: "Bún Riêu Cua Lột",
      titleEn: "Tomato Soft Shell Crab Vermicelli",
      description:
        "Sweet-sour tomato seafood broth, deep fry soft shell crab, field crab paste, AAA chuck eye, thin vermicelli.",
      dietary: ["seafood"],
    },
    {
      titleVi: "Bún Chả Hà Nội Ủ Khói",
      titleEn: "Hà Nội Smoky Grilled Pork Vermicelli",
      description:
        "Smoked grilled pork jowl and pork patty, vermicelli, herbs, pickled papaya, umami fish sauce.",
    },
    {
      titleVi: "Mì Trứng Sốt Bò Kho",
      titleEn: "Beef Ragu Pappardelle",
      description:
        "Five spices beef ragu, roasted grape tomato, pappardelle, sous-vide egg, parmesan, cilantro.",
      dietary: ["gluten", "dairy"],
    },
  ] satisfies FamilySetDish[],
  dessertLine: "Choice of 2 desserts",
};
