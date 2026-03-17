"use client";

import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { useRef } from "react";
import { OrnamentLine } from "../deco/ornament-line";
import { TileImage, TileShape } from "../deco/tiles";
import { Typography } from "../typography";
import { AnimatedButton } from "../ui/button";

// Props explanation:
// Stiffness: higher stiffness means more force required to move the element, and therefore a more bouncy motion.
// Damping: higher damping means more resistance to the motion, and therefore a more damped motion.
// Duration: the duration of the animation in seconds.
const slideTransition = { type: "spring" as const, stiffness: 50, damping: 11, duration: 0.5 };

function slideInFromLeft(inView: boolean) {
  return {
    x: inView ? 0 : -72,
    opacity: inView ? 1 : 0,
  };
}

function slideInFromRight(inView: boolean) {
  return {
    x: inView ? 0 : 72,
    opacity: inView ? 1 : 0,
  };
}

export function MenuOverview() {
  const mosaicRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(mosaicRef, { amount: 0.4, once: false });

  return (
    <section className="space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="flex flex-col items-center gap-6 pb-3 sm:gap-8 sm:p-6">
        <Typography variant="h1">Menu</Typography>

        <Typography variant="body">
          Traditional flavours with a modern twist - food that nourishes the soul
        </Typography>

        <div ref={mosaicRef} className="w-full max-w-5xl overflow-hidden p-3">
          <div className="grid grid-cols-6 gap-3">
            {/* Big hero tile: slide in from left + fade; reverse when scroll out */}
            <motion.div
              className="col-span-3 row-span-2"
              animate={slideInFromLeft(inView)}
              transition={slideTransition}
            >
              <TileImage
                img="/menu/chef-specialty/bo_ne.png"
                alt="Bo Ne"
                variant="leafL"
                animated
                float
                delay={0.05}
                className="h-full w-full"
              />
            </motion.div>

            {/* Right stack: slide in from right + fade; reverse when scroll out */}
            <motion.div
              animate={slideInFromRight(inView)}
              transition={slideTransition}
              className="col-span-2"
            >
              <TileImage
                img="/menu/chef-specialty/fish_dish.png"
                alt="Fish Dish"
                variant="roundTR"
                animated
                float
                delay={0.08}
              />
            </motion.div>

            <motion.div
              animate={slideInFromRight(inView)}
              transition={slideTransition}
              className="col-span-1"
            >
              <TileShape variant="leafLeft" animated float delay={0.35} />
            </motion.div>

            <motion.div
              animate={slideInFromRight(inView)}
              transition={slideTransition}
              className="col-span-1 self-center"
            >
              <TileShape variant="leafRight" filledStar animated float delay={0.25} />
            </motion.div>

            <motion.div
              animate={slideInFromRight(inView)}
              transition={slideTransition}
              className="col-span-2"
            >
              <TileImage
                img="/menu/chef-specialty/pho_rib.png"
                alt="Rib Pho"
                variant="roundBL"
                animated
                float
                delay={0.2}
              />
            </motion.div>
          </div>
        </div>

        {/* <AnimatedButton size="xl" href="/menus" text="View Menu" /> */}
        <AnimatedButton size="xl" href="/menu" text="View Menu" />
      </div>
    </section>
  );
}
