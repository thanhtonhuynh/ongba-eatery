"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { OrnamentLine } from "../deco/ornament-line";
import { Typography } from "../typography";

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

// Asymmetric 12-col rhythm so the supporting cards are deliberately unequal (DESIGN_VARIANCE 4).
const cardSpans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reviews() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-dark-wine space-y-10 px-4 py-16 sm:space-y-12 sm:px-6 sm:py-24">
      <OrnamentLine />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:gap-14">
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Typography variant="h1">What Guests Are Saying</Typography>
          <Typography variant="body" className="text-gold/70 max-w-xl">
            What our guests say after a meal at Ông Bà.
          </Typography>
        </motion.div>

        <motion.figure
          className="border-gold/20 bg-wine relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl border p-8 text-center shadow-[0_28px_60px_-20px_rgba(20,5,8,0.7)] sm:p-12"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: reduce ? 0 : 0.1, ease: EASE }}
        >
          <span
            aria-hidden
            className="font-bricolage-grotesque text-gold/25 pointer-events-none absolute top-1 left-6 text-7xl leading-none select-none sm:text-8xl"
          >
            &ldquo;
          </span>
          <blockquote className="text-gold relative max-w-3xl text-xl leading-snug font-light sm:text-3xl">
            {featuredReview.quote}
          </blockquote>
          <figcaption className="flex items-center gap-2">
            <Image src="/star-filled.svg" alt="" width={16} height={16} aria-hidden />
            <span className="font-bricolage-grotesque text-gold text-base font-semibold tracking-wide">
              {featuredReview.name}
            </span>
          </figcaption>
        </motion.figure>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-12">
          {reviews.map((review, i) => (
            <ReviewCard
              key={review.name}
              review={review}
              className={cardSpans[i]}
              delay={reduce ? 0 : 0.2 + i * 0.08}
              reduce={!!reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  className,
  delay,
  reduce,
}: {
  review: Review;
  className?: string;
  delay: number;
  reduce: boolean;
}) {
  return (
    <motion.figure
      className={cn(
        "border-gold/15 bg-darkest-wine flex flex-col gap-4 rounded-2xl border p-6 shadow-[0_20px_40px_-18px_rgba(20,5,8,0.7)] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1 sm:gap-5 sm:rounded-3xl sm:p-8",
        className,
      )}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <Image
        src="/star-filled.svg"
        alt=""
        width={18}
        height={18}
        aria-hidden
        className="opacity-90"
      />
      <blockquote className="text-gold/90 text-base leading-relaxed xl:text-lg">
        {review.quote}
      </blockquote>
      <figcaption className="font-bricolage-grotesque text-gold mt-auto text-sm font-semibold tracking-wide">
        {review.name}
      </figcaption>
    </motion.figure>
  );
}
