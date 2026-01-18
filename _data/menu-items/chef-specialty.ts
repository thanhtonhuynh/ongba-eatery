import { MenuItem } from "@/_types";

export const chefSpecialty: MenuItem[] = [
  {
    id: "bun_bo_hue_rib",
    category: "chef_specialty",
    title: "Bún Bò Huế Sườn Bò",
    subtitle: "Beef Rib Bún Bò Huế",
    description:
      "Spicy lemongrass broth, braised beef rib, AAA rare beef, beef brisket, slow cooked Viet ham, and pork ham",
    price: 30,
    imgSrc: "/menu/chef-specialty/bun-bo-hue-rib.png",
    dietary: ["beef", "gluten", "pork", "spicy"],
    badge: "new",
  },
  {
    id: "bun_moc",
    category: "chef_specialty",
    title: "Bún Mọc Sườn Chua Hà Nội",
    subtitle: "Hà Nội Style Pork Rib & Meatball Vermicelli",
    description: "Tangy tomato broth, pork rib, meatball, taro stems",
    price: 20,
    imgSrc: "/menu/chef-specialty/bun_moc.png",
    dietary: ["pork"],
    badge: "best_seller",
  },
  {
    id: "beef_rib_pho",
    category: "chef_specialty",
    title: "Phở Sườn Bò",
    subtitle: "Fall off the Bone Beef Rib Phở",
    description:
      "12-hour beef broth, braised beef rib, AAA rare beef, brisket, and topped with grated ginger",
    price: 29,
    imgSrc: "/menu/chef-specialty/pho_rib.png",
    dietary: ["beef"],
    badge: "best_seller",
  },
  {
    id: "fish_dish",
    category: "chef_specialty",
    title: "Cá Ba Sa Chiên Xù Sốt Cà Chua",
    subtitle: "Ông's Favourite Fish Dish",
    description:
      "Light battered Basa fillet simmered in house-made tomato sauce\nServed with steamed seasonal vegetables and rice",
    price: 20,
    imgSrc: "/menu/chef-specialty/fish_dish.png",
    dietary: ["seafood"],
    badge: "best_seller",
  },
  {
    id: "bo_ne",
    category: "chef_specialty",
    title: "Bò Né",
    subtitle: "Sizzling Beef on Skillet",
    description:
      "Beef, egg, corn, pate, tater tots, pickled veggies, house made pan sauce\nServed with Bánh Mì",
    price: 20,
    imgSrc: "/menu/chef-specialty/bo_ne.png",
    dietary: ["beef", "gluten"],
    badge: "best_seller",
  },
  {
    id: "bun_ca_cham",
    category: "chef_specialty",
    title: "Bún Cá Chấm",
    subtitle: "Hà Nội Style Fish Vermicelli Platter",
    description:
      "Battered Basa fish, lettuce, cilantro, pickled veggies\nSide of spicy fish sauce, and tangy tomato broth filled with pork meatballs, prawns & taro stems",
    price: 22,
    imgSrc: "/menu/chef-specialty/bun_ca_cham.png",
    dietary: ["pork", "seafood", "spicy"],
    badge: "best_seller",
  },
];
