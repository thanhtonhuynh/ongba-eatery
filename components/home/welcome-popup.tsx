"use client";

import { MinimalOrnament } from "@/components/deco/ornament-line";
import { AnimatedButton } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const RESERVE_URL =
  "https://www.opentable.ca/r/ongba-vietnamese-eatery-reservations-vancouver?restref=1489390&lang=en-CA&ot_source=Restaurant%20website";
const ORDER_URL =
  "https://order.toasttab.com/online/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way";

const STORAGE_KEY = "ongba_welcome_seen_at";
/** How long a dismissal silences the popup. Swap to sessionStorage below for once-per-session instead. */
const SUPPRESS_FOR_MS = 24 * 60 * 60 * 1000; // 1 day
const OPEN_DELAY_MS = 1500;

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const last = Number(window.localStorage.getItem(STORAGE_KEY));
    if (last && Date.now() - last < SUPPRESS_FOR_MS) return;

    const timer = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* DialogContent is a transparent shell; the card below owns the visual frame so the
          brand asymmetric radius isn't fought by the primitive's default rounded-4xl. */}
      <DialogContent
        showCloseButton={false}
        overlayClassName="duration-300"
        className={cn(
          "max-h-[92dvh] rounded-none border-0 bg-transparent p-0 shadow-none ring-0 md:max-w-5xl",
          "data-open:slide-in-from-bottom-4 duration-300 motion-reduce:animate-none",
        )}
      >
        <div className="from-dark-wine to-darkest-wine border-gold/70 relative overflow-hidden rounded-tl-[44px] rounded-br-[44px] border bg-linear-to-br shadow-2xl">
          {/* Framed-invitation inner hairline (brand double-border idiom) */}
          <div
            aria-hidden
            className="border-gold/25 pointer-events-none absolute inset-[5px] z-20 rounded-tl-[42px] rounded-br-[42px] border"
          />

          <DialogClose
            aria-label="Close"
            className={cn(
              "absolute top-5 right-5 z-30 inline-flex size-9 cursor-pointer items-center justify-center rounded-full",
              "border-gold/30 bg-darkest-wine/60 text-gold border supports-backdrop-filter:backdrop-blur-sm",
              "hover:bg-darkest-wine hover:text-light-gold focus-visible:ring-gold/50 transition-colors focus-visible:ring-2 focus-visible:outline-none",
            )}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={18} strokeWidth={1.8} />
          </DialogClose>

          <div className="grid md:grid-cols-[0.82fr_1fr]">
            {/* Ambiance */}
            <div className="relative h-48 md:h-auto md:min-h-[560px]">
              <Image
                src="/interiors/dining-7.png"
                alt="The dining room at Ông Bà"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover"
                loading="eager"
              />
              <div className="from-darkest-wine via-darkest-wine/15 md:from-dark-night/10 md:to-darkest-wine absolute inset-0 bg-linear-to-t to-transparent md:bg-linear-to-r" />
            </div>

            {/* Invitation */}
            <div className="relative flex flex-col justify-center gap-6 px-9 py-12 md:px-14 md:py-16">
              <div className="space-y-3">
                <p className="font-kasepi-sans text-gold text-4xl leading-[1.15] md:text-5xl">
                  Xin chào,
                </p>

                <DialogTitle className="font-kasepi-sans text-light-gold text-3xl leading-tight font-light md:text-4xl">
                  Welcome to Ông Bà!
                </DialogTitle>
              </div>

              <div className="flex">
                <MinimalOrnament />
              </div>

              <DialogDescription className="text-gold/70 mt-2 max-w-[42ch] text-base leading-relaxed">
                Pull up a chair for slow-simmered phở, bright herbs, and plates made to share.
              </DialogDescription>

              <div className="mt-4 flex flex-col gap-4">
                <AnimatedButton
                  size="xl"
                  href={RESERVE_URL}
                  text="Reserve now"
                  newTab
                  fullWidth
                  onClick={() => handleOpenChange(false)}
                />
                <AnimatedButton
                  size="xl"
                  color="outline"
                  href={ORDER_URL}
                  text="Order for Pickup"
                  newTab
                  fullWidth
                  onClick={() => handleOpenChange(false)}
                />
              </div>

              <DialogClose className="text-gold/60 hover:text-gold focus-visible:text-gold mt-1 cursor-pointer self-end text-xs tracking-wide uppercase transition-colors focus-visible:outline-none">
                Maybe later
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
