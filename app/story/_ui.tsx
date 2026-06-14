"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Scroll-reveal wrapper for story blocks. Reduced-motion aware. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: reduce ? 0 : delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Emph({ children }: { children: ReactNode }) {
  return (
    <em className="text-light-gold/90 inline-block pb-1 leading-[1.1] font-light italic">
      {children}
    </em>
  );
}

export function ChapterHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-kasepi-sans text-gold text-center text-[clamp(1.875rem,4.5vw,3rem)] leading-[1.12] font-medium tracking-tight text-balance",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function HairlineStar() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="bg-gold/45 h-px w-14" />
      <Image src="/star-filled.svg" alt="" width={15} height={15} />
      <span className="bg-gold/45 h-px w-14" />
    </div>
  );
}

/** Readable narrative column. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "text-gold/85 mx-auto max-w-2xl space-y-4 px-4 text-base leading-relaxed sm:px-6 lg:text-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Emphasised inline term (place names, key facts) within prose. */
export function Term({ children }: { children: ReactNode }) {
  return <strong className="text-gold font-semibold">{children}</strong>;
}

/** Rounded-rectangle double-gold-border photo frame. `className` sizes the outer box. */
export function StoryFrame({
  src,
  alt,
  className,
  objectPosition = "object-center",
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <div className={cn("border-gold rounded-[28px] border p-1.5", className)}>
      <div className="border-gold/50 relative h-full overflow-hidden rounded-[22px] border">
        <Image src={src} alt={alt} fill className={cn("object-cover", objectPosition)} />
      </div>
    </div>
  );
}
