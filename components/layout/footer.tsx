import LogoGold from "@/assets/logo-gold.png";
import { Call02Icon, Clock01Icon, Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { OrnamentLine } from "../deco/ornament-line";
import { navItems } from "./desktop-nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wine text-gold relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-20">
        <OrnamentLine />

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-12 md:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start gap-6 sm:col-span-2 md:col-span-4">
            <Image src={LogoGold} alt="Ông Bà Eatery" className="h-20 w-auto sm:h-24" />
            <p className="text-gold/70 max-w-xs text-sm leading-relaxed sm:text-base">
              Crafted from the freshest ingredients and rooted in family values to feed the soul.
            </p>
          </div>

          {/* Visit */}
          <div className="flex flex-col gap-5 sm:col-span-1 md:col-span-3">
            <FooterHeading>Visit Us</FooterHeading>
            <DetailRow icon={Location01Icon}>
              <p>1045 - 1163 Pinetree Way</p>
              <p>Coquitlam, BC V3B 7Z3</p>
            </DetailRow>
            <DetailRow icon={Clock01Icon}>
              <p>Open 7 days a week</p>
              <p>11:00 AM to 10:00 PM</p>
            </DetailRow>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5 sm:col-span-1 md:col-span-3">
            <FooterHeading>Contact</FooterHeading>
            <DetailLink icon={Call02Icon} href="tel:+16045541166">
              +1 (604) 554-1166
            </DetailLink>
            <DetailLink icon={Mail01Icon} href="mailto:restaurant@ongbagroup.com">
              <span className="break-all">restaurant@ongbagroup.com</span>
            </DetailLink>
          </div>

          {/* Explore */}
          <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-2">
            <FooterHeading>Explore</FooterHeading>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.title}
                </FooterLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-gold/15 relative border-t">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-6 py-6 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
          <p className="text-gold/60 text-xs tracking-wide uppercase">
            Copyright &copy; {year}, Ông Bà Eatery. All rights reserved.
          </p>
          <p className="text-gold/60 text-xs">
            Developed by{" "}
            <Link
              href="https://tonhuynh.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-light-gold underline-offset-4 transition-colors hover:underline"
            >
              Ton Huynh
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-kasepi-sans text-gold text-base tracking-[0.18em] uppercase">{children}</h3>
  );
}

function DetailRow({ icon, children }: { icon: typeof Location01Icon; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <HugeiconsIcon icon={icon} strokeWidth={1.5} className="text-gold/70 mt-0.5 size-5 shrink-0" />
      <div className="text-gold/80 text-sm leading-relaxed sm:text-base">{children}</div>
    </div>
  );
}

function DetailLink({
  icon,
  href,
  children,
}: {
  icon: typeof Location01Icon;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group text-gold/80 hover:text-gold flex items-start gap-3 transition-colors"
    >
      <HugeiconsIcon icon={icon} strokeWidth={1.5} className="mt-0.5 size-5 shrink-0" />
      <span className="text-sm leading-relaxed sm:text-base">{children}</span>
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group text-gold/80 hover:text-gold relative w-fit text-sm tracking-wide transition-colors sm:text-base"
    >
      {children}
      <span className="bg-gold absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
