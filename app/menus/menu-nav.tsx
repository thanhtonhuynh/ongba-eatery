import Link from "next/link";

type CategoryLike = { key: string; title: string };

type Props = {
  categories: CategoryLike[];
};

export function MenuNav({ categories }: Props) {
  return (
    <nav className="font-semibold uppercase">
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base md:gap-x-8 md:gap-y-4 lg:gap-x-16 xl:gap-x-10">
        {categories.map((category) => (
          <li key={category.key}>
            <Link href={`#${category.key}`} className="group relative whitespace-nowrap">
              {category.title}
              <span className="bg-gold absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
