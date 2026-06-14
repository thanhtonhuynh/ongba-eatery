"use client";

import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { GiftCardPlate } from "@/components/gift-card-plate";
import { AnimatedButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Coins01Icon, StarAward01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";

const TOAST = {
  buy: "https://order.toasttab.com/egiftcards/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way",
  balance:
    "https://www.toasttab.com/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way/findcard",
  rewardsSignup:
    "https://www.toasttab.com/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way/rewardsSignup",
  rewards:
    "https://www.toasttab.com/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way/rewards",
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

// Deco-art ledger: deliberately unequal spans + stepped offsets so the two
// rewards actions read as an asymmetric gallery wall, not a card grid.
const rewardCells = [
  { className: "md:col-span-6 md:col-start-1", icon: StarAward01Icon },
  { className: "md:col-span-5 md:col-start-8 md:mt-16", icon: Coins01Icon },
];

export default function GiftCardPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <HorizontalPatternBand blurBottom />

      {/* ── Gift cards ─────────────────────────────────────────────── */}
      <section className="bg-darkest-wine relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        <FloatingStars reduce={!!reduce} />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 sm:gap-28">
          {/* Masthead — asymmetric, left-aligned. Kasepi display with same-family
              italic emphasis (brand treatment). */}
          <motion.header
            className="flex max-w-2xl flex-col items-start gap-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h1 className="font-kasepi-sans text-gold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] font-medium tracking-tight text-balance">
              Give the gift of{" "}
              <em className="text-light-gold/90 inline-block pb-1 font-light italic">Ông Bà</em>
            </h1>
            <HairlineStar />
            <p className="text-gold/90 max-w-xl text-base leading-relaxed lg:text-lg">
              Share a table full of tradition. An Ông Bà gift card brings our kitchen and our
              flavours to the people you love.
            </p>
          </motion.header>

          {/* Featured — gift-card mock paired with the purchase actions.
              Asymmetric 12-col. */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <motion.div
              className="mx-auto w-full max-w-md md:col-span-6 md:col-start-1 md:mx-0 md:max-w-none"
              initial={reduce ? false : { opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <GiftCardPlate />
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-7 md:col-span-5 md:col-start-8"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: reduce ? 0 : 0.12, ease: EASE }}
            >
              <h2 className="font-kasepi-sans text-gold text-3xl tracking-wide sm:text-4xl">
                A card for every occasion
              </h2>
              <p className="text-gold/90 max-w-md text-base leading-relaxed lg:text-lg">
                Redeemable on every dish, dine-in or takeout, at our Coquitlam home. Delivered by
                email in minutes.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <AnimatedButton size="xl" href={TOAST.buy} text="Buy a Gift Card" newTab />
                <AnimatedButton
                  size="xl"
                  color="outline"
                  href={TOAST.balance}
                  text="Check Balance"
                  newTab
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Rewards ────────────────────────────────────────────────── */}
      <section className="bg-dark-wine relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 sm:gap-20">
          <motion.header
            className="flex max-w-2xl flex-col items-start gap-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="font-kasepi-sans text-gold text-[clamp(2.25rem,6vw,5rem)] leading-[1.1] font-medium tracking-tight text-balance">
              Ông Bà <em className="text-light-gold/90 inline-block pb-1 font-light italic">Rewards</em>
            </h2>
            <HairlineStar />
            <p className="text-gold/90 max-w-xl text-base leading-relaxed lg:text-lg">
              Every visit earns points toward dishes, treats, and members-only perks. Join the
              family, eat well, get rewarded.
            </p>
          </motion.header>

          {/* Stepped hairline ledger — no card boxes. */}
          <div className="grid grid-cols-1 items-start gap-x-10 gap-y-12 md:grid-cols-12">
            <RewardItem
              className={rewardCells[0].className}
              icon={rewardCells[0].icon}
              title="Join the program"
              body="Sign up in a minute and start earning from your next bowl of phở."
              cta={{ text: "Sign Up", href: TOAST.rewardsSignup, color: "gold" }}
              reduce={!!reduce}
              delay={0}
            />
            <RewardItem
              className={rewardCells[1].className}
              icon={rewardCells[1].icon}
              title="Your rewards"
              body="Already a member? Check your points balance and see what you've unlocked."
              cta={{ text: "View Rewards", href: TOAST.rewards, color: "outline" }}
              reduce={!!reduce}
              delay={0.08}
            />
          </div>
        </div>
      </section>

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}

function RewardItem({
  className,
  icon,
  title,
  body,
  cta,
  reduce,
  delay,
}: {
  className: string;
  icon: typeof StarAward01Icon;
  title: string;
  body: string;
  cta: { text: string; href: string; color: "gold" | "outline" };
  reduce: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className={cn("border-gold/20 flex flex-col items-start gap-5 border-t pt-7", className)}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: reduce ? 0 : delay, ease: EASE }}
    >
      <HugeiconsIcon icon={icon} strokeWidth={1.5} className="text-gold size-9" />
      <h3 className="font-kasepi-sans text-gold text-2xl tracking-wide sm:text-3xl">{title}</h3>
      <p className="text-gold/90 max-w-md text-base leading-relaxed lg:text-lg">{body}</p>
      <AnimatedButton size="lg" color={cta.color} href={cta.href} text={cta.text} newTab />
    </motion.div>
  );
}

/** Small ambient star cluster — Hero idiom, transform/opacity only, collapses
 *  to static under reduced motion. */
function FloatingStars({ reduce }: { reduce: boolean }) {
  const stars = [
    { top: "14%", left: "8%", delay: 0, filled: true },
    { top: "22%", right: "12%", delay: 0.6, filled: false },
    { bottom: "24%", left: "14%", delay: 1.2, filled: false },
    { bottom: "18%", right: "9%", delay: 0.3, filled: true },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: s.top, bottom: s.bottom, left: s.left, right: s.right }}
          animate={reduce ? undefined : { opacity: [0.25, 0.7, 0.25], scale: [1, 1.18, 1] }}
          transition={
            reduce ? undefined : { repeat: Infinity, duration: 3.4, delay: s.delay, ease: "easeInOut" }
          }
        >
          <Image
            src={s.filled ? "/star-filled.svg" : "/star.svg"}
            alt=""
            width={18}
            height={18}
          />
        </motion.div>
      ))}
    </div>
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
