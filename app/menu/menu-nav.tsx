import { categories } from "@/_data/categories";
import Link from "next/link";

export function MenuNav() {
  return (
    <nav className="sticky top-0 font-semibold uppercase">
      <ul className="flex justify-center gap-6">
        {categories.map((category) => (
          <li key={category.key} className="">
            <Link href={`#${category.key}`} className="group relative">
              {category.title}
              <span className="bg-gold absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
