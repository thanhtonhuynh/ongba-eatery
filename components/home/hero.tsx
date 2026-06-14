"use client";

import LogoGold from "@/assets/logo-gold.png";
import { AnimatedButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import type React from "react";

const taglineLines: { text?: string; content?: React.ReactNode; className: string }[] = [
  {
    content: (
      <>
        <span className="text-2xl font-light sm:text-3xl md:text-4xl">Honouring</span>{" "}
        <span className="font-kasepi-sans">Vietnamese Traditions</span>
      </>
    ),
    className: "",
  },
  {
    content: (
      <>
        <span className="text-xl font-light sm:text-2xl md:text-3xl">with a</span>{" "}
        <span className="font-kasepi-sans">Modern Twist</span>
      </>
    ),
    className: "",
  },
];

const starPositions = [
  { top: "23%", left: "20%", size: 20, delay: 0, filled: true },
  { top: "15%", right: "15%", size: 20, delay: 0.3, filled: true },
  { top: "33%", right: "25%", size: 20, delay: 0.5, filled: true },
  { bottom: "28%", left: "8%", size: 20, delay: 1, filled: false },
  { bottom: "26%", right: "10%", size: 20, delay: 1.5, filled: true },
  { bottom: "15%", left: "44%", size: 20, delay: 2, filled: false, center: true },
];

function HeroStars() {
  return (
    <div className="pointer-events-none absolute inset-0 z-5 overflow-hidden">
      {starPositions.map((pos, i) => (
        <motion.div
          key={i}
          className={cn("absolute", "center" in pos && pos.center && "left-1/2 -translate-x-1/2")}
          style={{
            top: pos.top,
            bottom: pos.bottom,
            left: pos.left,
            right: pos.right,
            width: pos.size,
            height: pos.size,
          }}
          // initial={{ opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1], y: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: pos.delay,
            ease: "easeInOut",
          }}
        >
          <Image
            src={pos.filled ? "/star-filled.svg" : "/star.svg"}
            alt=""
            width={pos.size}
            height={pos.size}
            className="h-full w-full"
            aria-hidden
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen flex-col place-content-center px-4">
      <Image src={"/interiors/dining-4.png"} alt="Hero" fill className="object-cover" priority />
      <div className="bg-dark-night/60 absolute inset-0" />

      <HeroStars />

      <div className="z-10 flex flex-col items-center gap-8 sm:gap-10">
        <motion.div
          className="flex flex-col items-center gap-8 rounded-3xl px-8 py-10 sm:gap-10 sm:px-12 sm:py-14"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reducedMotion ? 0.2 : 0.6,
            delay: reducedMotion ? 0 : 0.2,
            ease: "easeOut",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0.2 : 0.5,
              delay: reducedMotion ? 0 : 0.4,
              ease: "easeOut",
            }}
          >
            <Image src={LogoGold} alt="Ongba's Logo" className="h-auto w-35 sm:w-50 md:w-55" />
          </motion.div>

          <div className="flex flex-col gap-2">
            {/* <OrnamentLine size="half" /> */}
            <div className="space-y-1 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {taglineLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reducedMotion ? 0.2 : 0.5,
                    delay: reducedMotion ? 0 : 0.5 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className={line.className}
                >
                  {"text" in line ? line.text : line.content}
                </motion.div>
              ))}
            </div>
            {/* <OrnamentLine size="half" /> */}
          </div>

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0.2 : 0.5,
              delay: reducedMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <AnimatedButton
                size="xl"
                href="https://www.opentable.ca/r/ongba-vietnamese-eatery-reservations-vancouver?restref=1489390&lang=en-CA&ot_source=Restaurant%20website"
                text="Reserve now"
                newTab
              />
              <AnimatedButton
                size="xl"
                color="outline"
                href="https://order.toasttab.com/online/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way"
                text="Order for Pickup"
                newTab
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
