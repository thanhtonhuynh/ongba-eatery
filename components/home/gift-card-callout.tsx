"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { GiftCardPlate } from "../gift-card-plate";
import { AnimatedButton } from "../ui/button";

const BUY_GIFT_CARD =
  "https://order.toasttab.com/egiftcards/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way";

const EASE = [0.16, 1, 0.3, 1] as const;

export function GiftCardCallout() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-dark-wine text-gold relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
        {/* Plate floating over a soft gold glow */}
        <motion.div
          className="relative flex justify-center md:col-span-7"
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div
            aria-hidden
            className="bg-gold/15 pointer-events-none absolute top-1/2 left-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
          />
          <motion.div
            className="relative w-full max-w-md"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <GiftCardPlate />
          </motion.div>
        </motion.div>

        {/* Copy */}
        <motion.div
          className="flex flex-col items-start gap-6 md:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="font-kasepi-sans text-gold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-medium tracking-tight text-balance">
            A gift{" "}
            <span className="whitespace-nowrap">
              they&apos;ll{" "}
              <em className="text-light-gold/90 inline-block pb-1 leading-[1.1] font-light italic">
                savour
              </em>
            </span>
          </h2>

          <HairlineStar />

          <p className="text-gold/90 max-w-md text-base leading-relaxed lg:text-lg">
            Treat someone you love to the flavours of Ông Bà. Redeemable on every dish, dine-in or
            takeout, and delivered by email in minutes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <AnimatedButton size="xl" href={BUY_GIFT_CARD} text="Buy Now" newTab />
            <AnimatedButton size="xl" color="outline" href="/gift-card" text="Learn More" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HairlineStar() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="bg-gold/45 h-px w-16" />
      <Image src="/star-filled.svg" alt="" width={16} height={16} />
      <span className="bg-gold/45 h-px w-16" />
    </div>
  );
}
