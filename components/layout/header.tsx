import Link from "next/link";
import { Button } from "../ui/button";
import { DesktopNav } from "./desktop-nav";

export function Header() {
  return (
    <header className="bg-wine flex h-16 items-center justify-between px-8">
      <Button
        variant="link"
        className="font-titoli text-4xl font-bold uppercase hover:no-underline"
      >
        <Link href="/">Ongba Eatery</Link>
      </Button>
      <DesktopNav />
    </header>
  );
}
