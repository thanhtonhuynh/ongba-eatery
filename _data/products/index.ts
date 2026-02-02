import { Product } from "@/_types";
import { homemadeProducts } from "./homemade-products";
import { merchandises } from "./merchanside";

export const products: Product[] = [...homemadeProducts, ...merchandises];
