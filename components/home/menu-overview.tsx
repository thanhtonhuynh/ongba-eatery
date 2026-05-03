"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Star } from "../deco/star";
import { AnimatedSingleBorderButton } from "../ui/button";

type Slide = {
  src: string;
  name: string;
  nameEn: string;
};

const slides: Slide[] = [
  {
    src: "/menu/chef-specialty/bo_ne.png",
    name: "Bò Né",
    nameEn: "Sizzling Beef on Skillet",
  },
  {
    src: "/menu/chef-specialty/fish_dish.png",
    name: "Cá Ba Sa Chiên Xù",
    nameEn: "Ông's Favourite Fish Dish",
  },
  {
    src: "/menu/chef-specialty/pho_rib.png",
    name: "Phở Sườn Bò",
    nameEn: "Fall-off-the-Bone Beef Rib Phở",
  },
  {
    src: "/menu/chef-specialty/bun_moc.png",
    name: "Bún Mọc Sườn Chua",
    nameEn: "Hà Nội Pork Rib & Meatball Vermicelli",
  },
  {
    src: "/menu/chef-specialty/bun-bo-hue-rib.png",
    name: "Bún Bò Huế Sườn Bò",
    nameEn: "Beef Rib Bún Bò Huế",
  },
  {
    src: "/menu/chef-specialty/bun_ca_cham.png",
    name: "Bún Cá Chấm",
    nameEn: "Hà Nội Fish Vermicelli Platter",
  },
  {
    src: "/menu/noodle-soup/trio_pho.png",
    name: "Phở Đặc Biệt",
    nameEn: "Trio Beef Phở",
  },
  {
    src: "/menu/banh-mi/beef_banh_mi.png",
    name: "Bánh Mì Bò Xào Tỏi",
    nameEn: "Sautéed Beef Bánh Mì",
  },
  {
    src: "/menu/appetizer/goi_du_du.png",
    name: "Gỏi Đu Đủ",
    nameEn: "Papaya Salad",
  },
  {
    src: "/menu/drink/ca-phe-muoi.png",
    name: "Cà Phê Muối",
    nameEn: "Salted Foam Vietnamese Coffee",
  },
];

function ArrowButton({
  dir,
  onClick,
  label,
}: {
  dir: "left" | "right";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="border-gold/40 text-gold hover:border-gold hover:bg-gold/10 focus-visible:ring-gold/60 inline-flex size-10 items-center justify-center rounded-full border transition-all duration-300 outline-none focus-visible:ring-2"
    >
      <HugeiconsIcon
        icon={dir === "left" ? ArrowLeft01Icon : ArrowRight01Icon}
        strokeWidth={1}
        className="size-5"
      />
      <span className="sr-only">Previous slide</span>
    </button>
  );
}

export function MenuOverview() {
  const total = slides.length;
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const go = (n: number) => setIdx(((n % total) + total) % total);

  // Center the active arch via a CSS translateX on the track so the centering
  // animation rides on the same transition system (timing + easing) as each
  // arch's width/height tween. If we used `scrollLeft` instead, the browser's
  // native smooth-scroll would drift against the CSS transition mid-flight,
  // which reads as the active arch overshooting center then snapping back.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const wrapper = track.parentElement;
    if (!wrapper) return;

    const wrapperW = wrapper.clientWidth;
    const isMd = wrapperW >= 640;
    const ACTIVE_W = isMd ? 360 : 280;
    const INACTIVE_W = isMd ? 260 : 200;
    const GAP = isMd ? 28 : 20;

    const activeCenterInTrack = idx * (INACTIVE_W + GAP) + ACTIVE_W / 2;
    const tx = wrapperW / 2 - activeCenterInTrack;

    track.style.transform = `translate3d(${tx}px, 0, 0)`;
  }, [idx]);

  const current = slides[idx];

  return (
    <section className="bg-darkest-wine relative w-full overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
      {/* Top eyebrow strip */}
      <div className="mx-auto mb-12 flex max-w-6xl items-center gap-6 px-8 sm:mb-16">
        <span className="bg-gold/25 h-px flex-1" />
        <Star />
        {/* <span className="font-bricolage-grotesque text-gold/70 text-[10px] font-semibold tracking-[0.5em] uppercase">
          Our Menu
        </span>
        <Star /> */}
        <span className="bg-gold/25 h-px flex-1" />
      </div>

      {/* Heading + active dish meta */}
      <div className="mx-auto mb-14 grid max-w-6xl grid-cols-1 items-end gap-10 px-8 md:grid-cols-[1.4fr_1fr]">
        <h2 className="font-titoli text-gold text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-tight">
          Traditional
          <br />
          <em className="text-light-gold/90 font-light italic">flavours,</em>{" "}
          <span className="text-gold">modern</span>{" "}
          <span className="text-light-gold/90 font-light italic">soul.</span>
        </h2>

        <div className="flex flex-col gap-3 md:items-end md:text-right">
          <span className="font-bricolage-grotesque text-secondary text-[10px] font-semibold tracking-[0.4em] uppercase tabular-nums">
            Now showing · {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <motion.div
            key={`name-${idx}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h3 className="font-bricolage-grotesque text-gold text-2xl font-medium sm:text-3xl">
              {current.name}
            </h3>
            <p className="font-bricolage-grotesque text-secondary mt-2 text-xs font-semibold tracking-[0.24em] sm:text-sm">
              {current.nameEn}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Arch strip — full-bleed colonnade.
          Wrapper height is fixed so the arches can scale up/down freely
          without nudging the controls below during the active swap.
          Centering is driven by translateX on the track (see effect above). */}
      <div className="relative h-[572px] w-full overflow-hidden sm:h-[692px]">
        <div
          ref={trackRef}
          className="absolute inset-y-0 left-0 flex h-full items-center gap-5 transition-transform duration-800 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform sm:gap-7"
        >
          {slides.map((s, i) => {
            const active = i === idx;
            const orient = i % 2 === 0 ? "rounded-t-full" : "rounded-b-full";
            return (
              <button
                key={s.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`View ${s.nameEn}`}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative shrink-0 overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                  orient,
                  active
                    ? "h-[440px] w-[280px] shadow-[0_0_50px_rgba(247,206,131,0.24)] sm:h-[560px] sm:w-[360px]"
                    : "h-[320px] w-[200px] opacity-70 hover:opacity-90 sm:h-[420px] sm:w-[260px]",
                )}
              >
                <Image
                  src={s.src}
                  alt={`${s.name} — ${s.nameEn}`}
                  fill
                  sizes="(min-width: 640px) 360px, 280px"
                  className={cn(
                    "pointer-events-none object-cover transition-transform duration-1500 select-none",
                    active ? "scale-100" : "scale-105",
                  )}
                />
                {!active && (
                  <span
                    aria-hidden="true"
                    className="bg-darkest-wine/30 pointer-events-none absolute inset-0"
                  />
                )}
                {active && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute left-1/2 -translate-x-1/2",
                      i % 2 === 0 ? "bottom-3" : "top-3",
                    )}
                  >
                    <Star size={20} opacity={1} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Edge gradients to suggest the colonnade continues past the viewport */}
        <span
          aria-hidden="true"
          className="from-darkest-wine pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r to-transparent"
        />
        <span
          aria-hidden="true"
          className="from-darkest-wine pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l to-transparent"
        />
      </div>

      {/* Bottom controls */}
      <div className="mx-auto mt-4 flex max-w-6xl flex-col items-center gap-6 px-8 sm:flex-row sm:justify-between sm:gap-8">
        <div className="flex items-center gap-5">
          <ArrowButton dir="left" onClick={() => go(idx - 1)} label="Previous dish" />
          <ArrowButton dir="right" onClick={() => go(idx + 1)} label="Next dish" />
        </div>

        <div className="flex w-full flex-1 items-center gap-3 sm:w-auto">
          <span className="font-bricolage-grotesque text-secondary text-[10px] font-semibold tracking-[0.3em] uppercase tabular-nums">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <div className="bg-gold/20 relative h-px flex-1">
            <span
              className="bg-gold absolute top-0 left-0 h-px transition-all duration-700 ease-out"
              style={{ width: `${((idx + 1) / total) * 100}%` }}
            />
          </div>
          <span className="font-bricolage-grotesque text-secondary text-[10px] font-semibold tracking-[0.3em] uppercase tabular-nums">
            {String(total).padStart(2, "0")}
          </span>
        </div>

        <AnimatedSingleBorderButton size="lg" href="/menu" text="View Menu" />
      </div>
    </section>
  );
}
