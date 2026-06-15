"use client";

import { ReservationForm } from "./reservation-form";
import { HairlineStar } from "@/components/deco/hairline-star";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ReservationSection() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-dark-wine relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
        <motion.header
          className="flex max-w-2xl flex-col items-start gap-5"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="font-kasepi-sans text-gold text-[clamp(2.25rem,6vw,5rem)] leading-[1.1] font-medium tracking-tight text-balance">
            Plan your{" "}
            <em className="text-light-gold/90 inline-block pb-1 font-light italic">gathering</em>
          </h2>
          <HairlineStar />
          <p className="text-gold/90 max-w-xl text-base leading-relaxed lg:text-lg">
            Reserving for eight or more, booking a private event or dining room, or planning
            catering? Share the details and our team will follow up.
          </p>
        </motion.header>

        <div className="w-full max-w-2xl">
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
