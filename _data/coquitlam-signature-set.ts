import type { DietaryTag } from "@/_types";

export type SignatureSetDish = {
  titleVi: string;
  titleEn: string;
  description?: string;
  note?: string;
  dietary?: DietaryTag[];
};

export const signatureSetDisclaimer =
  "Our set menu is thoughtfully curated to be enjoyed as a complete experience.\nWe may be unable to accommodate modifications or substitutions.\nPlease inform our team of any allergies or dietary restrictions in advance.";

export const signatureSetFor2 = {
  heading: "Signature Set",
  priceLine: "For 2 — $50 per person",
  firstCourse: {
    label: "1st course — choice of one",
    options: [
      {
        titleVi: "Ba Chỉ Bóp Sả Tắc",
        titleEn: "Ông's Favourite Pork Belly",
        description: "Crispy pork belly in lemongrass kumquat fish sauce glaze, crispy wonton chip.",
        dietary: ["gluten"],
      },
      {
        titleVi: "Cánh Gà Chiên Mắm",
        titleEn: "Fish Sauce Glazed Chicken Wings",
        description: "Lightly battered wings, fish sauce glaze.",
      },
    ] satisfies SignatureSetDish[],
  },
  secondCourse: {
    label: "2nd course — choice of one",
    options: [
      {
        titleVi: "Bò Tái Chanh Tartare",
        titleEn: "Wagyu Butter Beef Tartare",
        description:
          "Tajima wagyu beef, garlic fish sauce dressing, Dijon, shallot, mint, basil, Vietnamese coriander, toasted peanuts.\nServed with lotus chips.",
        dietary: ["peanut"],
      },
      {
        titleVi: "Nộm Xoài Đu Đủ Mực Nướng Sa tế",
        titleEn: "Charred Sate Squid Papaya Salad",
        description:
          "Papaya, mango, cucumber, grape tomato, shallot, mint, Thai basil, peanut, crispy garlic.\nServed with rice paper cracker.",
        dietary: ["peanut"],
      },
    ] satisfies SignatureSetDish[],
  },
  thirdCourse: {
    label: "3rd course",
    fixed: {
      titleVi: "Xôi Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Bà's Caramelized Pork Tomahawk",
      description:
        "12oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil.\nServed with mango cucumber salad (dưa góp) and sticky rice.",
    } satisfies SignatureSetDish,
    oneOfLabel: "And one of:",
    oneOf: [
      {
        titleVi: "Bún Riêu Cua Lột",
        titleEn: "Tomato Soft Shell Crab Vermicelli",
        description:
          "Sweet-sour tomato seafood broth, deep fry soft shell crab, field crab paste, shrimp, AAA rare beef, fried tofu, thin vermicelli.",
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
        dietary: ["gluten"],
      },
    ] satisfies SignatureSetDish[],
  },
  dessertLine: "Choice of 1 dessert",
};

export const signatureSetFor4 = {
  heading: "Signature Set",
  priceLine: "For 4 — $50 per person",
  firstCourse: {
    included: [
      {
        titleVi: "Pate Nấm Truffle",
        titleEn: "Truffle Duck Pate",
        description: "Duck and truffle pâté, onion jam, toasted milk bread.",
        dietary: ["gluten"],
      },
      {
        titleVi: "Bò Tái Chanh Tartare",
        titleEn: "Wagyu Butter Beef Tartare",
        description:
          "Tajima wagyu beef, garlic fish sauce dressing, Dijon, shallot, mint, basil, Vietnamese coriander, toasted peanuts.\nServed with lotus chips.",
        dietary: ["peanut"],
      },
      {
        titleVi: "Vẹm Xanh Sốt Cà Ri Cốt Dừa",
        titleEn: "Coconut Curry Mussels",
        description: "Mussels in coconut curry broth, fresh herbs, jalapeño.\nServed with bánh mì.",
        dietary: ["gluten"],
      },
      {
        titleVi: "Nộm Xoài Đu Đủ Mực Nướng Sa tế",
        titleEn: "Charred Sate Squid Papaya Salad",
        description:
          "Papaya, mango, cucumber, grape tomato, shallot, mint, Thai basil, peanut, crispy garlic.\nServed with rice paper cracker.",
        dietary: ["peanut"],
      },
    ] satisfies SignatureSetDish[],
    choice: [
      {
        titleVi: "Cánh Gà Chiên Mắm",
        titleEn: "Fish Sauce Glazed Chicken Wings",
        description: "Lightly battered wings, fish sauce glaze.",
      },
      {
        titleVi: "Đậu Phụ Tẩm Mỡ Hành",
        titleEn: "Scallion Crispy Tofu",
        description: "Crispy lemongrass tofu, scallion oil, jalapeño.",
        dietary: ["vegetarian"],
      },
    ] satisfies SignatureSetDish[],
  },
  secondCourse: [
    {
      titleVi: "Xôi Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Bà's Caramelized Pork Tomahawk",
      description:
        "12oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil.\nServed with mango cucumber salad (dưa góp) and sticky rice.",
    },
    {
      titleVi: "Phở Tái Lăn",
      titleEn: "Wok Smokey Beef Pho",
      description:
        "12 hours beef broth, Wok-seared AAA rare beef, beef brisket, beef balls, bone marrow, grated ginger.",
      note: "Can be replaced by any Classic Noodle Soup from our menu.",
    },
  ] satisfies SignatureSetDish[],
  thirdCourse: [
    {
      titleVi: "Bún Riêu Cua Lột",
      titleEn: "Tomato Soft Shell Crab Vermicelli",
      description:
        "Sweet-sour tomato seafood broth, deep fry soft shell crab, field crab paste, shrimp, AAA rare beef, fried tofu, thin vermicelli.",
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
      dietary: ["gluten"],
    },
  ] satisfies SignatureSetDish[],
};
