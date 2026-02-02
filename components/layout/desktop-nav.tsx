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

export function DesktopNav() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-6">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button
              className="font-titoli p-0 text-xl tracking-wide uppercase"
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
