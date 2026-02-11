import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

type NavItem = {
  title: string;
  href: string;
};

export const navItems: NavItem[] = [
  { title: "Our Story", href: "/story" },
  { title: "Menu", href: "/menu" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
  { title: "Merchandise", href: "/merchandise" },
];

export function DesktopNav({ scrolled }: { scrolled: boolean }) {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button
              className={cn(
                "font-titoli p-0 text-2xl tracking-wide uppercase",
                scrolled && "text-xl",
              )}
              variant="link"
              render={<Link href={item.href}>{item.title}</Link>}
              nativeButton={false}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
