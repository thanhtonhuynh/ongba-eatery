"use client";

import { HairlineStar } from "@/components/deco/hairline-star";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import { CareerForm } from "./career-form";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CareerSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="apply"
      className="bg-dark-wine relative scroll-mt-28 overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
        <motion.header
          className="flex max-w-2xl flex-col items-start gap-5"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="font-kasepi-sans text-gold text-[clamp(2.25rem,6vw,5rem)] leading-[1.1] font-medium tracking-tight text-balance">
            Apply to{" "}
            <em className="text-light-gold/90 inline-block pb-1 leading-[1.1] font-light italic">
              join us
            </em>
          </h2>
          <HairlineStar />
          <p className="text-gold/90 max-w-xl text-base leading-relaxed lg:text-lg">
            Tell us a little about yourself and what you are looking for. We read every application
            and will reach out if there is a fit.
          </p>
        </motion.header>

        <div className="w-full max-w-2xl">
          <CareerForm />
        </div>
      </div>
    </section>
  );
}
