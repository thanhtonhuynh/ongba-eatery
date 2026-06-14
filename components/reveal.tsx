"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Scroll-reveal wrapper (fade + rise). Reduced-motion aware. */
export function Reveal({
  children,
  delay = 0,
  className,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Fraction of the element in view before revealing. Use a low value for tall blocks. */
  amount?: number | "some" | "all";
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
