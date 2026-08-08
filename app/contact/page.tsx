"use client";

import { addressLines, restaurant, serviceHours } from "@/_data/restaurant";
import { HairlineStar } from "@/components/deco/hairline-star";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { AnimatedButton } from "@/components/ui/button";
import { ReservationSection } from "./components/reservation-section";
import { Call02Icon, Clock01Icon, Location01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import type { ReactNode } from "react";

const RESERVE = restaurant.reserveUrl;
const ORDER_PICKUP =
  "https://order.toasttab.com/online/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way";
const MAP_EMBED =
  "https://www.google.com/maps?q=Ong+Ba+Vietnamese+Eatery+1045+Pinetree+Way+Coquitlam+BC+V3B+7Z3&output=embed";
const MAP_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=1045+Pinetree+Way+Coquitlam+BC+V3B+7Z3";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <HorizontalPatternBand blurBottom />

      {/* ── Visit us ───────────────────────────────────────────────── */}
      <section className="bg-darkest-wine relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        {/* In-palette art-deco sunburst — slow ambient rotation, radial-masked,
            transform-only, collapses to static under reduced motion. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.1] will-change-transform"
          style={{
            background:
              "repeating-conic-gradient(from 0deg at 50% 50%, var(--gold) 0deg 0.45deg, transparent 0.45deg 7.5deg)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 60%)",
            maskImage: "radial-gradient(circle at 50% 50%, #000 0%, transparent 60%)",
          }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={reduce ? undefined : { duration: 160, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-20 sm:gap-28">
          <motion.header
            className="flex max-w-2xl flex-col items-start gap-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h1 className="font-kasepi-sans text-gold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] font-medium tracking-tight text-balance">
              Come sit at our{" "}
              <em className="text-light-gold/90 inline-block pb-1 font-light italic">table</em>
            </h1>
            <HairlineStar />
            <p className="text-gold/90 max-w-xl text-base leading-relaxed lg:text-lg">
              One kitchen, open seven days a week, in the heart of Coquitlam. Reserve a table or
              order ahead, we will keep the broth warm.
            </p>
          </motion.header>

          {/* Asymmetric 12-col: arched interior photo + hairline detail ledger. */}
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
                    src="/interiors/dining-4.png"
                    alt="The warm, lantern-lit dining room of Ông Bà Vietnamese Eatery in Coquitlam."
                    fill
                    sizes="(min-width: 768px) 40vw, 80vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="bg-foreground/10 absolute inset-0" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col gap-8 md:col-span-6 md:col-start-7"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: reduce ? 0 : 0.12, ease: EASE }}
            >
              <h2 className="font-kasepi-sans text-gold text-3xl tracking-wide sm:text-4xl">
                Coquitlam
              </h2>

              {/* Stepped hairline ledger — no card boxes. */}
              <div className="flex flex-col">
                <Detail icon={Location01Icon} label="Address">
                  {addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </Detail>
                <Detail icon={Clock01Icon} label="Hours">
                  <p>{restaurant.hours.note}</p>
                  {serviceHours.map((hours) => (
                    <p key={hours}>{hours}</p>
                  ))}
                </Detail>
                <Detail icon={Call02Icon} label="Phone">
                  <a
                    href={restaurant.phone.href}
                    className="hover:text-light-gold transition-colors"
                  >
                    {restaurant.phone.display}
                  </a>
                </Detail>
                <Detail icon={Mail01Icon} label="Email">
                  <a
                    href={`mailto:${restaurant.email}`}
                    className="hover:text-light-gold transition-colors"
                  >
                    {restaurant.email}
                  </a>
                </Detail>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <AnimatedButton size="xl" href={RESERVE} text="Reserve now" newTab />
                <AnimatedButton
                  size="xl"
                  color="outline"
                  href={ORDER_PICKUP}
                  text="Order for Pickup"
                  newTab
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Plan your gathering ────────────────────────────────────── */}
      <ReservationSection />

      {/* ── Find your way here ─────────────────────────────────────── */}
      <section className="bg-darkest-wine relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
          <motion.header
            className="flex flex-col items-start gap-5"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="font-kasepi-sans text-gold text-[clamp(2.25rem,6vw,5rem)] leading-[1.1] font-medium tracking-tight text-balance">
              Find your way{" "}
              <em className="text-light-gold/90 inline-block pb-1 font-light italic">here</em>
            </h2>
            <HairlineStar />
          </motion.header>

          <motion.div
            className="group border-gold rounded-tl-[80px] rounded-tr-2xl rounded-br-[80px] rounded-bl-2xl border p-1.5 sm:rounded-tl-[110px] sm:rounded-br-[110px]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="border-gold/50 relative aspect-4/3 overflow-hidden rounded-tl-[74px] rounded-tr-xl rounded-br-[74px] rounded-bl-xl border sm:aspect-21/9 sm:rounded-tl-[104px] sm:rounded-br-[104px]">
              <iframe
                title="Map to Ông Bà Vietnamese Eatery, 1045 Pinetree Way, Coquitlam"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full contrast-[1.05] grayscale-[0.2]"
              />
            </div>
          </motion.div>

          <div className="flex">
            <AnimatedButton color="outline" href={MAP_DIRECTIONS} text="Get Directions" newTab />
          </div>
        </div>
      </section>

      <HorizontalPatternBand blurTop fromColor="from-darkest-wine" toColor="to-darkest-wine/10" />
    </>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: typeof Location01Icon;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="border-gold/15 flex items-start gap-4 border-t py-5">
      <HugeiconsIcon icon={icon} strokeWidth={1.5} className="text-gold mt-0.5 size-5 shrink-0" />
      <div className="flex flex-col gap-0.5">
        <span className="sr-only">{label}</span>
        <div className="text-gold/90 text-base leading-relaxed lg:text-lg">{children}</div>
      </div>
    </div>
  );
}
