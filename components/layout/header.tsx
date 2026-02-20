"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Detect scroll change
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <header
        className={cn(
          // "bg-wine fixed top-0 z-50 flex w-full items-center justify-between p-3 sm:px-6",
          // scrolled && "bg-transparent px-2 sm:px-3",
          "bg-wine fixed top-0 z-50 flex w-full items-center justify-between p-3 sm:px-6",
          isHome && "bg-transparent",
          scrolled && "bg-transparent px-2 sm:px-3",
        )}
      >
        <motion.div
          className={cn(
            "flex w-full items-center justify-between rounded-xl bg-transparent",
            scrolled && "border-gold/50 bg-dark-wine border px-2 sm:px-3",
          )}
          animate={{ height: scrolled ? 64 : 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 1 }}
        >
          <Button
            variant="link"
            className={cn(
              "font-bricolage-grotesque p-0 text-3xl font-medium tracking-wider uppercase transition-all duration-700 hover:no-underline sm:text-4xl",
              scrolled && "text-2xl sm:text-3xl",
            )}
            nativeButton={false}
            render={<Link href="/">Ongba Eatery</Link>}
          />
          <DesktopNav scrolled={scrolled} />
          <MobileNav />
        </motion.div>
      </header>
      {!isHome && <HeaderSpacer />}
    </>
  );
}

// Spacer to prevent content jump on header resize
const HEADER_HEIGHT_DEFAULT = 100;
const HEADER_HEIGHT_SCROLLED = 64;
const HEADER_PADDING = 24; // py-3 = 12px top + 12px bottom

export function HeaderSpacer() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.div
      animate={{
        height: scrolled
          ? HEADER_HEIGHT_SCROLLED + HEADER_PADDING
          : HEADER_HEIGHT_DEFAULT + HEADER_PADDING,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.7 }}
    />
  );
}
