"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { OngbaWithLogo } from "../ongba-with-logo";
import { AnimatedButton } from "../ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StoryOverview() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.7, delay: reduce ? 0 : delay, ease: EASE },
  });

  return (
    <section className="bg-dark-wine grid min-h-screen grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
      <PatternPanel position="top" />

      <div className="flex flex-col items-center justify-center gap-6 px-6 text-center sm:gap-8">
        <motion.h2
          className="font-kasepi-sans text-gold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-medium tracking-tight text-balance"
          {...reveal(0)}
        >
          Our{" "}
          <em className="text-light-gold/90 inline-block pb-1 leading-[1.1] font-light italic">
            Story
          </em>
        </motion.h2>

        <motion.div {...reveal(0.08)}>
          <HairlineStar />
        </motion.div>

        <motion.p
          className="text-gold/90 max-w-md text-base leading-relaxed lg:text-lg"
          {...reveal(0.16)}
        >
          Ông Bà Eatery was born from our parents&apos; extraordinary journey, a story of love,
          courage, and sacrifice. It lives on in every dish we set on the table.
        </motion.p>

        <motion.div
          className="mt-2 w-full max-w-[250px] sm:max-w-[350px] md:max-w-[422px]"
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 0.24, ease: EASE }}
        >
          <OngbaWithLogo width={422} height={562} />
        </motion.div>

        <motion.div {...reveal(0.34)}>
          <AnimatedButton size="xl" href="/story" text="Read More" />
        </motion.div>
      </div>

      <PatternPanel position="bottom" />
    </section>
  );
}

function HairlineStar() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden>
      <span className="bg-gold/45 h-px w-16" />
      <Image src="/star-filled.svg" alt="" width={16} height={16} />
      <span className="bg-gold/45 h-px w-16" />
    </div>
  );
}

function PatternPanel({ position }: { position: "top" | "bottom" }) {
  return (
    <div className="bg-wine relative md:block md:min-h-screen">
      <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[400px] bg-center bg-repeat opacity-40" />

      {/* On &lt; md: top panel fades at bottom; bottom panel fades at top (opposite). On md+: same gradient for both. */}
      <div
        className={
          position === "top"
            ? "to-darkest-wine/80 from-darkest-wine/5 absolute inset-0 bg-linear-to-b"
            : "max-md:from-darkest-wine/80 max-md:to-darkest-wine/5 md:from-darkest-wine/5 md:to-darkest-wine/80 absolute inset-0 bg-linear-to-b"
        }
      />
    </div>
  );
}
