import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatedLink } from "../ui/button";

type NavItemChild = { title: string; href: string };

type NavItem = {
  title: string;
  href: string;
  children?: NavItemChild[];
};

export const navItems: NavItem[] = [
  { title: "Our Story", href: "/story" },
  // {
  //   title: "Menus",
  //   href: "/menus",
  //   children: [
  //     { title: "Vancouver", href: "/menus/vancouver" },
  //     { title: "Coquitlam", href: "/menus/coquitlam" },
  //   ],
  // },
  { title: "Menu", href: "/menu" },
  { title: "Careers", href: "/careers" },
  // { title: "Locations", href: "/locations" },
  { title: "Contact", href: "/contact" },
  { title: "Gift Cards", href: "/gift-card" },
];

export function DesktopNav({ scrolled }: { scrolled: boolean }) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6">
        {navItems.map((item, i) => (
          <li key={i} className={item.children ? "group relative" : undefined}>
            <AnimatedLink
              href={item.href}
              text={item.title}
              className={cn(
                "text-lg tracking-wide uppercase transition-all duration-700",
                scrolled && "text-base",
              )}
            />
            {item.children && (
              <div className="invisible absolute top-full left-0 z-50 w-full min-w-max opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="bg-dark-wine mt-1 flex flex-col rounded-xl p-3 shadow-xl">
                  {item.children.map((child, j) => (
                    <Link
                      key={j}
                      href={child.href}
                      className="font-bricolage-grotesque hover:bg-gold/20 rounded-xl px-4 py-2 text-base tracking-wide uppercase transition-colors"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
