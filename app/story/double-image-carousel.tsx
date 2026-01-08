"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export type DoubleSlide = {
  leftSrc: string;
  leftAlt: string;
  rightSrc: string;
  rightAlt: string;
};

export function DoubleImageCarousel({ slides }: { slides: DoubleSlide[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="mx-auto w-full max-w-lg">
      <div className="border-gold/70 border p-3">
        <CarouselContent>
          {slides.map((s, idx) => (
            <CarouselItem key={idx}>
              <div className="grid h-90 grid-cols-2 gap-3">
                <PhotoFrame src={s.leftSrc} alt={s.leftAlt} />
                <PhotoFrame src={s.rightSrc} alt={s.rightAlt} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8">
        <div className="flex items-center">
          <CarouselPrevious className={"relative top-0 left-0 translate-y-0"} />
          <div className="bg-gold/50 h-px w-10" />
        </div>

        <div className="flex items-center gap-2">
          {Array.from({ length: slides.length }).map((_, index) => {
            const active = current === index + 1;

            return (
              <Button
                key={index}
                size={"icon-xs"}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "border-gold/70 relative flex size-5 items-center justify-center rounded-full border bg-transparent transition hover:scale-105 hover:bg-transparent",
                  active && "shadow-[0_0_7px_rgba(247,206,131,0.45)]",
                )}
              >
                <span
                  className={cn(
                    "absolute size-3.5 rounded-full transition-all",
                    active ? "bg-gold scale-100" : "scale-50 bg-transparent",
                  )}
                />
              </Button>
            );
          })}
        </div>

        <div className="flex items-center">
          <div className="bg-gold/50 h-px w-10" />
          <CarouselNext className={"relative right-0 bottom-0 translate-y-0"} />
        </div>
      </div>
    </Carousel>
  );
}

function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="border-gold/50 relative border">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
