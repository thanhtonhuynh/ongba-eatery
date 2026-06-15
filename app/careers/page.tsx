"use client";

import { teamMembers } from "@/_data/people";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { AnimatedButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CareerSection } from "./components/career-section";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import type { ReactNode } from "react";

const APPLY = "#apply";
const EASE = [0.16, 1, 0.3, 1] as const;

const SECTION = "text-gold relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32";
const H2_CLASS =
  "font-kasepi-sans text-gold text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.1] font-medium tracking-tight text-balance";

// Even extruded edge: stacked box-shadows offset purely to the right build a
// solid wine side with a straight edge (no diagonal flare at the corners),
// matching the leftward tilt so the framed image reads as a lifted 3D plaque.
const EXTRUDE_SHADOW = [
  ...Array.from({ length: 16 }, (_, i) => `${i + 1}px 0 0 var(--wine)`),
  "10px 22px 34px rgba(0,0,0,0.5)",
].join(", ");

const VALUES = [
  {
    title: "A family at the table",
    body: "A supportive, family-oriented kitchen where everyone belongs.",
  },
  {
    title: "Tradition, reimagined",
    body: "We honour Vietnamese tradition while embracing modern creativity.",
  },
  {
    title: "Room to grow",
    body: "Grow with us as we open new locations and new opportunities.",
  },
  {
    title: "Food with soul",
    body: "Share our mission to bring soulful, modern Vietnamese cuisine to the community.",
  },
];

export default function CareersPage() {
  const reduce = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.4 },
    transition: { duration: 0.7, delay: reduce ? 0 : delay, ease: EASE },
  });

  return (
    <>
      <HorizontalPatternBand blurBottom />

      {/* Hero */}
      <section className={cn("bg-darkest-wine", SECTION)}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
          <motion.div className="flex flex-col items-start gap-6 md:col-span-6" {...reveal(0)}>
            <h1 className="font-kasepi-sans text-gold text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.04] font-medium tracking-tight text-balance">
              Where work feels like <Emph>home</Emph>
            </h1>

            <HairlineStar />

            <div className="text-gold/90 max-w-md space-y-4 text-base leading-relaxed lg:text-lg">
              <p>
                At Ông Bà, a restaurant is not just a workplace. It is a home where passion,
                tradition, and modern creativity come together.
              </p>
              <p>
                We are always looking for dedicated, warm-hearted people to join our growing family.
                There is a place for you here.
              </p>
            </div>

            <div className="pt-2">
              <AnimatedButton size="xl" href={APPLY} text="Apply Now" />
            </div>
          </motion.div>

          <motion.div className="md:col-span-6" {...reveal(0.15)}>
            <HeroArch reduce={!!reduce} />
          </motion.div>
        </div>
      </section>

      {/* Why join */}
      <section className={cn("bg-dark-wine", SECTION)}>
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <motion.header className="flex flex-col items-start gap-5" {...reveal(0)}>
            <h2 className={H2_CLASS}>
              Why you&apos;ll love it <Emph>here</Emph>
            </h2>
            <HairlineStar />
          </motion.header>

          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                className="border-gold/15 flex flex-col items-start gap-3 border-t pt-7"
                {...reveal(0.06 * i)}
              >
                <h3 className="font-kasepi-sans text-gold text-xl tracking-wide sm:text-2xl">
                  {value.title}
                </h3>
                <p className="text-gold/80 text-base leading-relaxed">{value.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Ông Bà family */}
      <section className={cn("bg-darkest-wine", SECTION)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          <motion.header className="flex flex-col items-center gap-5 text-center" {...reveal(0)}>
            <h2 className={H2_CLASS}>
              Meet the <Emph>family</Emph>
            </h2>
            <HairlineStar />
          </motion.header>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
            {teamMembers.map((person, i) => (
              <TeamPortrait key={person.name} person={person} index={i} reduce={!!reduce} />
            ))}
          </div>
        </div>
      </section>

      <CareerSection />

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}

function HeroArch({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
      initial={reduce ? false : { rotateY: -25, rotateX: 3 }}
      whileHover={reduce ? undefined : { rotateY: -17, rotateX: 1, y: -14, scale: 1.03 }}
      transition={{ type: "spring", duration: 0.75, bounce: 0.3 }}
      className="group relative mx-auto w-full max-w-sm"
    >
      {/* Gold halo set deeper on the Z-axis, brightens as it lifts */}
      <div
        aria-hidden
        style={{ transform: "translateZ(-60px)" }}
        className="bg-gold/15 pointer-events-none absolute inset-6 rounded-full opacity-60 blur-[80px] transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Rounded plaque: wine border, extruded into an even 3D wine edge */}
      <div
        style={{ boxShadow: EXTRUDE_SHADOW }}
        className="border-wine relative rounded-[32px] border"
      >
        <div className="border-gold/50 relative aspect-4/5 overflow-hidden rounded-[24px] border">
          <Image
            src="/interiors/dining-3.png"
            alt="The warm, lantern-lit dining room at Ông Bà Vietnamese Eatery, seen through an archway."
            fill
            sizes="(min-width: 768px) 42vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="bg-darkest-wine/10 absolute inset-0" />
        </div>
      </div>
    </motion.div>
  );
}

function TeamPortrait({
  person,
  index,
  reduce,
}: {
  person: { name: string; role: string; imgSrc: string };
  index: number;
  reduce: boolean;
}) {
  return (
    <motion.figure
      className={cn(
        "group flex flex-col items-center gap-4 text-center",
        index % 2 === 1 && "lg:mt-12",
      )}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: reduce ? 0 : 0.08 * index, ease: EASE }}
    >
      <div className="border-gold w-full rounded-t-full rounded-b-2xl border p-1.5 transition-shadow duration-500 group-hover:shadow-[0_0_30px_rgba(247,206,131,0.18)]">
        <div className="border-gold/40 relative aspect-square w-full overflow-hidden rounded-t-full rounded-b-xl border">
          <Image
            src={person.imgSrc}
            alt={`${person.name}, ${person.role} at Ông Bà`}
            fill
            sizes="(min-width: 1024px) 22vw, 45vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
      </div>
      <figcaption className="flex flex-col gap-1">
        <span className="font-kasepi-sans text-gold text-lg tracking-wide sm:text-xl">
          {person.name}
        </span>
        <span className="text-gold/70 text-sm italic sm:text-base">{person.role}</span>
      </figcaption>
    </motion.figure>
  );
}

function Emph({ children }: { children: ReactNode }) {
  return (
    <em className="text-light-gold/90 inline-block pb-1 leading-[1.1] font-light italic">
      {children}
    </em>
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
