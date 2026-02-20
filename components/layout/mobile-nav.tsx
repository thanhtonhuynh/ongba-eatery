"use client";

import { cn } from "@/lib/utils";
import type { Variants } from "motion/react";
import { stagger } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { navItems } from "./desktop-nav";

// Slight correction so expansion aligns with visual center of the icon (~2–3px left and down)
const BUTTON_ORIGIN_OFFSET = { x: -3, y: 3 };

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggle = useCallback(() => {
    if (!isOpen && toggleButtonRef.current) {
      const rect = toggleButtonRef.current.getBoundingClientRect();
      setOrigin({
        x: rect.left + rect.width / 2 + BUTTON_ORIGIN_OFFSET.x,
        y: rect.top + rect.height / 2 + BUTTON_ORIGIN_OFFSET.y,
      });
    }
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  // Measure hamburger position so the circle expands from the button
  useLayoutEffect(() => {
    const updateOrigin = () => {
      const target = toggleButtonRef.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      setOrigin((prev) => {
        const x = rect.left + rect.width / 2 + BUTTON_ORIGIN_OFFSET.x;
        const y = rect.top + rect.height / 2 + BUTTON_ORIGIN_OFFSET.y;
        if (prev.x === x && prev.y === y) return prev;
        return { x, y };
      });
    };
    // Ref may not be set on first layout effect (child hasn't committed yet); retry shortly
    updateOrigin();
    const id = setTimeout(updateOrigin, 0);
    const id2 = setTimeout(updateOrigin, 50);
    window.addEventListener("resize", updateOrigin);
    window.addEventListener("scroll", updateOrigin, true);
    return () => {
      clearTimeout(id);
      clearTimeout(id2);
      window.removeEventListener("resize", updateOrigin);
      window.removeEventListener("scroll", updateOrigin, true);
    };
  }, []);

  return (
    <div className="relative lg:hidden">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={{ origin }}
        ref={containerRef}
        className="relative"
      >
        <motion.div
          className="bg-dark-wine fixed inset-0 z-40"
          variants={sidebarVariants}
          custom={{ origin }}
        />
        <Navigation isOpen={isOpen} toggle={toggle} />
        <MenuToggle ref={toggleButtonRef} toggle={toggle} />
      </motion.nav>
    </div>
  );
}

const navVariants = {
  open: {
    transition: { delayChildren: stagger(0.07, { startDelay: 0.2 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const Navigation = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) => (
  <motion.ul
    className={cn(
      `absolute top-20 right-0 z-50 w-64 text-right`,
      isOpen ? "pointer-events-auto" : "pointer-events-none",
    )}
    variants={navVariants}
  >
    {navItems.map((item, i) => (
      <MenuItem key={i} item={item} toggle={toggle} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type NavItemType = (typeof navItems)[number];

const MenuItem = ({ item, toggle }: { item: NavItemType; toggle: () => void }) => {
  return (
    <motion.li
      className="mb-6 cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <div className="flex flex-col items-end gap-2">
        <Link
          href={item.href}
          className="font-titoli text-3xl tracking-wider uppercase transition-colors"
        >
          {item.title}
        </Link>
        {item.children?.map((child, j) => (
          <Link
            key={j}
            href={child.href}
            className="font-titoli text-gold/90 text-xl tracking-wider uppercase transition-colors"
          >
            {child.title}
          </Link>
        ))}
      </div>
    </motion.li>
  );
};

// Same fallback on server and client to avoid hydration mismatch (no window/document)
const FALLBACK_ORIGIN = { x: 0, y: 0 };

function getOrigin(custom?: { origin: { x: number; y: number } }) {
  const o = custom?.origin;
  if (o && (o.x !== 0 || o.y !== 0)) return o;
  return FALLBACK_ORIGIN;
}

// Radius must cover full viewport from top-right origin (diagonal); use fixed large value to avoid hydration
const FULL_VIEWPORT_RADIUS = 3000;

const sidebarVariants: Variants = {
  open: (custom?: { origin: { x: number; y: number } }) => {
    const origin = getOrigin(custom);
    return {
      clipPath: `circle(${FULL_VIEWPORT_RADIUS}px at ${origin.x}px ${origin.y}px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    };
  },
  closed: (custom?: { origin: { x: number; y: number } }) => {
    const origin = getOrigin(custom);
    return {
      clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#F5DEB3"
    strokeLinecap="round"
    {...props}
  />
);

function MenuToggle({
  toggle,
  ref,
}: {
  toggle: () => void;
  ref: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <button
      ref={ref}
      type="button"
      className="absolute top-1/2 right-2 z-50 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-transparent outline-none select-none"
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
