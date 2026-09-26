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
  priceLine: "For 2 — $60 per person",
  /** Each row is a "choose one" pair. */
  starterChoices: [
    [
      {
        titleVi: "Gỏi Tôm",
        titleEn: "Shrimp Ceviche Stack",
        description:
          "Served with wonton chip.\nShrimp, onion, cucumber, tomato, avocado, Vietnamese lime garlic fish sauce dressing.",
        dietary: ["seafood"],
      },
      {
        titleVi: "Ba Chỉ Chiên Giòn Caesar Salad",
        titleEn: "Crispy Pork Belly Caesar Salad",
        description: "Five spices crispy pork belly, Romaine lettuce, Vietnamese Caesar dressing.",
      },
    ],
    [
      {
        titleVi: "Xíu Mại Cà Chua",
        titleEn: "Tomato Meatball",
        description: "Served with banh mi.\nTomato pork meatball. Topped with parmesan.",
        dietary: ["gluten"],
      },
      {
        titleVi: "Vẹm Xanh Sốt Cà Ri Cốt Dừa",
        titleEn: "Coconut Curry Mussels",
        description: "Served with banh mi.\nMussels in coconut curry broth, fresh herbs, jalapeño.",
        dietary: ["seafood", "gluten"],
      },
    ],
  ] satisfies SignatureSetDish[][],
  entrees: [
    {
      titleVi: "Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Bà's Caramelized Pork Tomahawk",
      description:
        "Served with pickled cucumber (dưa góp) and jasmine rice.\n15oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil.",
      dietary: ["gluten"],
    },
    {
      titleVi: "Chả Cá Lã Vọng",
      titleEn: "Grilled Turmeric Fish",
      description:
        "Turmeric marinated fish served sizzling table side with fresh dill and scallion, accompanied by thin vermicelli, toasted peanut and traditional shrimp paste dipping sauce.",
      dietary: ["seafood", "peanut"],
    },
  ] satisfies SignatureSetDish[],
  dessertLine: "Choice of 1",
};

export const signatureSetFor4 = {
  heading: "Signature Set",
  priceLine: "For 4 — $60 per person",
  starters: [
    {
      titleVi: "Xíu Mại Cà Chua",
      titleEn: "Tomato Meatball",
      description: "Served with banh mi.\nTomato pork meatball. Topped with parmesan.",
      dietary: ["gluten"],
    },
    {
      titleVi: "Bò Tái Chanh Tartare",
      titleEn: "Wagyu Butter Beef Tartare",
      description:
        "Served with taro chips.\nWagyu beef, garlic fish sauce dressing, Dijon, shallot, mint, basil, Vietnamese coriander, egg yolk, grated parmesan cheese, toasted peanuts.",
      dietary: ["peanut"],
    },
    {
      titleVi: "Vẹm Xanh Sốt Cà Ri Cốt Dừa",
      titleEn: "Coconut Curry Mussels",
      description: "Served with banh mi.\nMussels in coconut curry broth, fresh herbs, jalapeño.",
      dietary: ["seafood", "gluten"],
    },
    {
      titleVi: "Gỏi Tôm",
      titleEn: "Shrimp Ceviche Stack",
      description:
        "Served with wonton chip.\nShrimp, onion, cucumber, tomato, avocado, Vietnamese lime garlic fish sauce dressing.",
      dietary: ["seafood"],
    },
  ] satisfies SignatureSetDish[],
  entrees: [
    {
      titleVi: "Sườn Heo Tomahawk Sốt Thịt Kho",
      titleEn: "Bà's Caramelized Pork Tomahawk",
      description:
        "Served with pickled cucumber (dưa góp) and jasmine rice.\n15oz Johnston's Farm pork tomahawk, thịt kho caramel sauce, scallion oil.",
      dietary: ["gluten"],
    },
    {
      titleVi: "Phở Sườn Bò Wagyu",
      titleEn: "Wagyu Beef Rib Pho",
      description:
        "Spice it up with Bun Bo Hue broth $2.\nSignature braised beef rib, wagyu rare beef, brisket, bone marrow, green onion, cilantro.",
    },
    {
      titleVi: "Chả Cá Lã Vọng",
      titleEn: "Grilled Turmeric Fish",
      description:
        "Turmeric marinated fish served sizzling table side with fresh dill and scallion, accompanied by thin vermicelli, toasted peanut and traditional shrimp paste dipping sauce.",
      dietary: ["seafood", "peanut"],
    },
    {
      titleVi: "Mì Trứng Sốt Bò Kho",
      titleEn: "Beef Ragu Pappardelle",
      description:
        "Five spices beef ragu, roasted grape tomato, pappardelle, sous-vide egg, parmesan, cilantro.",
      dietary: ["gluten"],
    },
  ] satisfies SignatureSetDish[],
  dessertLine: "Choice of 2",
};
