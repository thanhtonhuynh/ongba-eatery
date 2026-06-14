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
    ] satisfies SignatureSetDish[],
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
        titleVi: "Salad Cà Chua Burrata",
        titleEn: "Ông's Garden Burrata Salad",
        description:
          "Tomato, cucumber, shallot, burrata cheese, Vietnamese dầu giấm vinaigrette, peanut.",
        dietary: ["peanut", "dairy"],
      },
    ] satisfies SignatureSetDish[],
  },
  thirdCourse: {
    label: "3rd course",
    fixed: {
      titleVi: "Xôi Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Ba's Grilled Caramelized Pork Chop",
      description:
        "12oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil. Served with pickle papaya carrot and sticky rice.",
      dietary: ["gluten"],
    } satisfies SignatureSetDish,
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
        titleVi: "Bún Chả Hà Nội Hun Khói",
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
    ] satisfies SignatureSetDish[],
  },
  dessertLine: "Choice of 1 dessert",
};

export const signatureSetFor4 = {
  heading: "Signature Set",
  priceLine: "For 4 — $50 per person",
  firstCourse: [
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
      titleVi: "Salad Cà Chua Burrata",
      titleEn: "Ông's Garden Burrata Salad",
      description:
        "Tomato, cucumber, shallot, burrata cheese, Vietnamese dầu giấm vinaigrette, peanut.",
      dietary: ["peanut", "dairy"],
    },
    {
      titleVi: "Vẹm Xanh Sốt Cà Ri Cốt Dừa",
      titleEn: "Coconut Curry Mussel with Fries",
      description:
        "Mussels in coconut curry broth, fresh herbs, pickled jalapeño. Served with fries.",
      dietary: ["seafood"],
    },
  ] satisfies SignatureSetDish[],
  secondCourse: [
    {
      titleVi: "Xôi Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Ba's Grilled Caramelized Pork Chop",
      description:
        "12oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil. Served with pickle papaya carrot and sticky rice.",
      dietary: ["gluten"],
    },
    {
      titleVi: "Phở Tái Lăn",
      titleEn: "Wok Smokey Beef Pho",
      description: "12 hours beef broth, Wok-seared AAA Chuck Eye, beef brisket, grated ginger.",
      note: "Can be replaced by any Classic Noodle Soup from our menu.",
    },
  ] satisfies SignatureSetDish[],
  thirdCourse: [
    {
      titleVi: "Bún Riêu Cua Lột",
      titleEn: "Tomato Soft Shell Crab Vermicelli",
      description:
        "Sweet-sour tomato seafood broth, deep fry soft shell crab, field crab paste, AAA chuck eye, thin vermicelli.",
      dietary: ["seafood"],
    },
    {
      titleVi: "Bún Chả Hà Nội Hun Khói",
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
  ] satisfies SignatureSetDish[],
};
