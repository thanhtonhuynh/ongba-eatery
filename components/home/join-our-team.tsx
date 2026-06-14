"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { AnimatedButton } from "../ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function JoinOurTeam() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-darkest-wine text-gold relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
        {/* Copy */}
        <motion.div
          className="flex flex-col items-start gap-6 md:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="font-kasepi-sans text-gold text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-medium tracking-tight text-balance">
            More than a kitchen, a{" "}
            <em className="text-light-gold/90 inline-block pb-1 leading-[1.1] font-light italic">
              family
            </em>
          </h2>

          <HairlineStar />

          <div className="max-w-md space-y-4 text-base leading-relaxed lg:text-lg">
            <p>
              At Ông Bà, food is more than what&apos;s on the plate. It is connection, tradition,
              and moments that feed the soul.
            </p>
            <p>
              We are always looking for dedicated, warm-hearted people to join our growing family.
              There is a place at our table for you.
            </p>
          </div>

          <div className="pt-2">
            <AnimatedButton size="xl" href="/careers" text="Join Our Team" color="gold" />
          </div>
        </motion.div>

        {/* Image with 3D tilt + layered deco frame */}
        <motion.div
          className="md:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <TiltFrame reduce={!!reduce} />
        </motion.div>
      </div>
    </section>
  );
}

function TiltFrame({ reduce }: { reduce: boolean }) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 150, damping: 18, mass: 0.4 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), spring);

  const glareX = useTransform(px, [-0.5, 0.5], ["20%", "80%"]);
  const glareY = useTransform(py, [-0.5, 0.5], ["15%", "85%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,243,214,0.22), transparent 55%)`;

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: "preserve-3d" }}
      className="group relative"
    >
      {/* Main frame, lifted toward the viewer */}
      <div
        style={{ transform: "translateZ(35px)" }}
        className="border-gold relative rounded-tl-[110px] rounded-tr-2xl rounded-br-[110px] rounded-bl-2xl border p-2 shadow-[0_18px_40px_rgba(247,206,131,0.1)] transition-shadow duration-500 group-hover:shadow-[0_34px_70px_rgba(247,206,131,0.22)]"
      >
        <div className="border-gold/30 relative aspect-16/11 overflow-hidden rounded-tl-[100px] rounded-tr-xl rounded-br-[100px] rounded-bl-xl border">
          <Image
            src="/interiors/dining-1.png"
            alt="Warm, golden-lit dining room at Ông Bà with bar seating and gilded wall panels."
            fill
            sizes="(min-width: 768px) 58vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          {/* Cursor-following sheen */}
          <motion.div
            aria-hidden
            style={{ background: glare }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </div>
    </motion.div>
  );
}

function HairlineStar() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="bg-gold/40 h-px w-16" />
      <Image src="/star-filled.svg" alt="" width={16} height={16} />
      <span className="bg-gold/40 h-px w-16" />
    </div>
  );
}
