"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll change
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header
      className={cn(
        "bg-wine fixed top-0 z-50 flex w-full items-center justify-between px-6 py-2",
        scrolled && "bg-transparent px-3",
      )}
    >
      <motion.div
        className={cn(
          "flex w-full items-center justify-between rounded-lg",
          scrolled && "border-gold/50 bg-dark-wine border px-3",
        )}
        animate={{ height: scrolled ? 64 : 100 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        <Button
          variant="link"
          className="font-titoli p-0 text-3xl font-bold tracking-wide uppercase hover:no-underline"
          nativeButton={false}
          render={<Link href="/">Ongba Eatery</Link>}
        />
        <DesktopNav />
        <MobileNav />
      </motion.div>
    </header>
  );
}
