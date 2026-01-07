import Link from "next/link";
import { Button } from "../ui/button";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Our Story", href: "/story" },
  { title: "Menu", href: "/menu" },
  { title: "Career", href: "career" },
  { title: "Contact", href: "contact" },
  { title: "Merchandise", href: "merchandise" },
];

export function DesktopNav() {
  return (
    <nav className="">
      <ul className="font-titoli flex">
        {navItems.map((item, i) => (
          <li key={i}>
            <Button className="text-2xl uppercase" variant="link">
              <Link href={item.href}>{item.title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
