"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";

type Review = { quote: string; name: string };

// Lightly trimmed for the landing-page line cap and copy hygiene; meaning preserved.
const featuredReview: Review = {
  quote:
    "Love the food, the decor, and the backstory of the restaurant. A true Canadian origin story about a family's quest for a better life.",
  name: "RJ Sachs",
};

const reviews: Review[] = [
  {
    quote:
      "The broth is rich and flavourful, and the interior is very cute as well. The recipes are passed down from the employees' grandparents.",
    name: "Nicole Fung",
  },
  {
    quote:
      "Absolutely the best pho. I love the environment, and the food is consistently awesome. Always worth a visit.",
    name: "Annie Gu",
  },
  {
    quote: "Consistently great food and good prices. One of my favourite places to eat.",
    name: "Jonathan Leung",
  },
  {
    quote: "The food here is unique. I don't find it at any other Vietnamese restaurant.",
    name: "Yuka S.",
  },
];

// Deco-art ledger: deliberately unequal spans + stepped offsets so the four
// supporting quotes read as an asymmetric gallery wall, not a card grid.
const supportCells = [
  "md:col-span-6 md:col-start-1",
  "md:col-span-5 md:col-start-8 md:mt-16",
  "md:col-span-5 md:col-start-1",
  "md:col-span-6 md:col-start-7 md:mt-16",
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reviews() {
  const reduce = useReducedMotion();

  return (
    <section
      id="reviews"
      className="bg-dark-wine relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
    >
      {/* In-palette art-deco sunburst. CSS conic rays, radial-masked, slow ambient
          rotation. Transform-only, pointer-events-none; collapses to static under
          reduced motion. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.12] will-change-transform"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 50%, var(--gold) 0deg 0.45deg, transparent 0.45deg 7.5deg)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 60%)",
          maskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 60%)",
        }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 150, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 sm:gap-28">
        {/* Masthead - asymmetric, left-aligned. Kasepi display with same-family
            italic emphasis (brand treatment), real <h2>. */}
        <motion.header
          className="flex max-w-xl flex-col items-start gap-5"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="font-kasepi-sans text-gold w-full text-[clamp(2.25rem,6vw,5rem)] leading-[1.1] font-medium tracking-tight text-balance">
            What guests are{" "}
            <em className="text-light-gold/90 inline-block pb-1 font-light italic">saying</em>
          </h2>
          <div className="flex items-center gap-3" aria-hidden>
            <span className="bg-gold/45 h-px w-16" />
            <Image src="/star-filled.svg" alt="" width={16} height={16} />
            <span className="bg-gold/45 h-px w-16" />
          </div>
        </motion.header>

        {/* Featured testimonial - arched, double-gold-border interior photo paired
            with an oversized pull quote. Asymmetric 12-col. */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <motion.div
            className="group mx-auto w-full max-w-sm md:col-span-5 md:col-start-1 md:mx-0 md:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="border-gold rounded-t-[150px] rounded-b-2xl border p-1.5 transition-shadow duration-500 group-hover:shadow-[0_0_36px_rgba(247,206,131,0.18)] sm:rounded-t-[200px]">
              <div className="border-gold/50 relative aspect-3/4 overflow-hidden rounded-t-[142px] rounded-b-xl border sm:rounded-t-[192px]">
                <Image
                  src="/interior.jpg"
                  alt="Guests dining inside the Ông Bà Vietnamese Eatery at dusk, beneath warm hanging lights."
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="bg-foreground/10 absolute inset-0" />
              </div>
            </div>
          </motion.div>

          <motion.figure
            className="flex flex-col gap-7 md:col-span-6 md:col-start-7"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: reduce ? 0 : 0.12, ease: EASE }}
          >
            <Stars size={18} />
            <blockquote className="text-gold max-w-2xl text-xl leading-snug font-light sm:text-2xl lg:text-[1.85rem]">
              {`“${featuredReview.quote}”`}
            </blockquote>
            <figcaption className="flex flex-col gap-1">
              <span className="font-kasepi-sans text-gold text-xl tracking-wide sm:text-2xl">
                {featuredReview.name}
              </span>
              <span className="text-secondary text-sm">Google review</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* Supporting reviews - stepped hairline ledger, no card boxes. */}
        <div className="grid grid-cols-1 items-start gap-x-10 gap-y-12 md:grid-cols-12">
          {reviews.map((review, i) => (
            <motion.figure
              key={review.name}
              className={cn("border-gold/20 flex flex-col gap-4 border-t pt-6", supportCells[i])}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: reduce ? 0 : 0.06 * (i % 2), ease: EASE }}
            >
              <Stars size={13} />
              <blockquote className="text-gold/90 text-base leading-relaxed lg:text-lg">
                {review.quote}
              </blockquote>
              <figcaption className="flex items-baseline gap-2">
                <span className="font-kasepi-sans text-gold text-base tracking-wide">
                  {review.name}
                </span>
                <span className="text-secondary/80 text-xs">Google</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1.5" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image key={i} src="/star-filled.svg" alt="" width={size} height={size} aria-hidden />
      ))}
    </div>
  );
}
