"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Star } from "./deco/star";

export type ArchSlide = { src: string; alt: string };

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
    </button>
  );
}

/**
 * Full-bleed Art-Deco arch colonnade carousel: the active arch grows and
 * centers, neighbours dim. Pointer-swipe + arrows + a progress rail. Reports
 * the active index via `onActiveChange`; `action` renders at the end of the
 * controls row (e.g. a "View Menu" button).
 */
export function ArchCarousel({
  slides,
  onActiveChange,
  action,
}: {
  slides: ArchSlide[];
  onActiveChange?: (index: number) => void;
  action?: ReactNode;
}) {
  const total = slides.length;
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number | null>(null);
  const didSwipeRef = useRef(false);

  const go = (n: number) => setIdx(((n % total) + total) % total);

  // Pointer-based swipe; `didSwipeRef` suppresses the click that would fire on
  // whichever arch the finger lands on at the end of a swipe.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    didSwipeRef.current = false;
    dragStartX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 8) didSwipeRef.current = true;
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    const SWIPE_THRESHOLD = 30;
    if (dx > SWIPE_THRESHOLD) go(idx - 1);
    else if (dx < -SWIPE_THRESHOLD) go(idx + 1);
  };

  // Center the active arch via translateX on the track so centering rides the
  // same transition as each arch's width/height tween.
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
    track.style.transform = `translate3d(${wrapperW / 2 - activeCenterInTrack}px, 0, 0)`;
  }, [idx]);

  useEffect(() => {
    onActiveChange?.(idx);
  }, [idx, onActiveChange]);

  return (
    <div className="w-full">
      <div
        className="relative h-[512px] w-full touch-pan-y overflow-hidden select-none sm:h-[650px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
      >
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
                onClick={() => {
                  if (didSwipeRef.current) return;
                  go(i);
                }}
                aria-label={s.alt}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative shrink-0 overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                  orient,
                  active
                    ? "h-[420px] w-[280px] shadow-[0_0_40px_rgba(247,206,131,0.24)] sm:h-[560px] sm:w-[360px]"
                    : "h-[300px] w-[200px] opacity-70 hover:opacity-90 sm:h-[420px] sm:w-[260px]",
                )}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
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

        <span
          aria-hidden="true"
          className="from-darkest-wine pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r to-transparent"
        />
        <span
          aria-hidden="true"
          className="from-darkest-wine pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l to-transparent"
        />
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-6 px-8 sm:flex-row sm:justify-between sm:gap-8">
        <div className="flex items-center gap-5">
          <ArrowButton dir="left" onClick={() => go(idx - 1)} label="Previous" />
          <ArrowButton dir="right" onClick={() => go(idx + 1)} label="Next" />
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

        {action}
      </div>
    </div>
  );
}
