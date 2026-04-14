import { MenuItem } from "@/_types";

export const signatureEntree: MenuItem[] = [
  {
    id: "cq_beef_rib_pho",
    category: "cq_signature_entree",
    title: "Phở Sườn Bò",
    subtitle: "Beef Rib Pho",
    description:
      "Our signature AAA braised beef rib, AAA rare beef and brisket topped with green onion, cilantro, and grated ginger.\nSpice it up with Bun Bo Hue broth $2",
    price: 30,
  },
  {
    id: "cq_bun_cha_ha_noi",
    category: "cq_signature_entree",
    title: "Bún Chả Hà Nội Hun Khói",
    subtitle: "Hà Nội Smoky Grilled Pork Vermicelli",
    description:
      "Signature dish of Hanoi with smoke infused. Grilled pork jowl and grilled pork patty served with fresh herbs, vermicelli, pickle green papaya and nuoc cham fish sauce.",
    price: 24,
  },
  {
    id: "cq_beef_ragu_pappardelle",
    category: "cq_signature_entree",
    title: "Mì Trứng Sốt Bò Kho",
    subtitle: "Beef Ragu Pappardelle",
    description:
      "Vietnamese five spices beef ragu, roasted grape tomato and pappardelle noodle. Topped with sous vide egg, parmesan cheese and cilantro.",
    price: 26,
    dietary: ["gluten", "dairy"],
  },
  {
    id: "cq_ba_pork_chop",
    category: "cq_signature_entree",
    title: "Sườn Nướng Sốt Thịt Kho",
    subtitle: "Ba's Grilled Caramelized Pork Chop",
    description:
      "16oz Johnston's Farm Pork Tomahawk grilled to perfection in Thit Kho Sauce. Topped with scallion oil and micro cilantro. Served with rice.",
    price: 42,
  },
  {
    id: "cq_tomato_soft_shell_crab_hotpot",
    category: "cq_signature_entree",
    title: "Lẩu Riêu Cua Lột",
    subtitle: "Tomato Soft Shell Crab Hotpot (for 2)",
    description:
      "Sweet and Sour seafood tomato broth. Served with sweet water crab paste, AAA rare beef, fish ball ball, pork rib, fried tofu, assorted vegetable, mushroom, and thin vermicelli.\nExtra shoft shell crab $9",
    price: 45,
    dietary: ["seafood"],
  },
];
