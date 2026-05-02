"use client";

import { coquitlamDesserts } from "@/_data/coquitlam-desserts-drinks";
import {
  familySetDisclaimer,
  familySetFor2,
  familySetFor4,
  type FamilySetDish,
} from "@/_data/coquitlam-family-set";
import { classicNoodleSoup } from "@/_data/coquitlam-menu-items/classic-noodle-soup";
import { DIETARY_META, type DietaryTag, type MenuItem } from "@/_types";
import { MinimalOrnament } from "@/components/deco/ornament-line";
import { cn } from "@/lib/utils";
import Image from "next/image";

const familySetNavCategories = [
  { key: "cq_family_for_2", title: "For 2" },
  { key: "cq_family_for_4", title: "For 4" },
];

/** Pill-style anchor nav — family-set only. All-day / Desserts use the simple `MenuNav`. */
function FamilySetPillNav() {
  return (
    <nav className="font-bricolage-grotesque flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {familySetNavCategories.map((c) => (
          <li key={c.key}>
            <a
              href={`#${c.key}`}
              className="group border-gold/40 text-light-gold hover:text-darkest-wine focus-visible:ring-gold/60 relative inline-flex items-center justify-center overflow-hidden rounded-full border px-7 py-2.5 text-xs font-semibold tracking-[0.24em] uppercase transition-colors duration-300 outline-none focus-visible:ring-2 sm:px-9 sm:py-3 sm:text-sm"
            >
              {/* animated fill — sweeps in from the bottom */}
              <span
                aria-hidden="true"
                className="bg-light-gold absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />
              <span className="relative">{c.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type NormalizedDish = {
  key: string;
  titleEn?: string;
  titleVi: string;
  description?: string;
  dietary?: DietaryTag[];
};

function normalizeFamilyDish(dish: FamilySetDish): NormalizedDish {
  return {
    key: dish.titleEn,
    titleEn: dish.titleEn,
    titleVi: dish.titleVi,
    description: dish.description,
    dietary: dish.dietary,
  };
}

function normalizeMenuItem(item: MenuItem): NormalizedDish {
  return {
    key: item.id,
    titleEn: item.subtitle ?? item.title,
    titleVi: item.title,
    description: item.description,
    dietary: item.dietary,
  };
}

function DietaryIcons({ tags }: { tags: DietaryTag[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {tags.map((tag) => {
        const meta = DIETARY_META[tag];
        return (
          <span
            key={tag}
            className="inline-flex items-center gap-1"
            title={`Contains ${meta.label.toLowerCase()}`}
          >
            <Image
              src={meta.iconSrc}
              alt={meta.label}
              width={14}
              height={14}
              className="opacity-60"
            />
            <span className="sr-only">Contains {meta.label}</span>
          </span>
        );
      })}
    </div>
  );
}

function DishBlock({ dish, compact = false }: { dish: NormalizedDish; compact?: boolean }) {
  return (
    <div className={cn(compact ? "space-y-1" : "space-y-1.5")}>
      <p className="font-bricolage-grotesque text-base font-bold tracking-tight uppercase sm:text-lg">
        {dish.titleVi}
      </p>
      {dish.titleEn && (
        <p className="font-bricolage-grotesque text-secondary text-sm font-semibold italic">
          {dish.titleEn}
        </p>
      )}
      {dish.description && (
        <p className="text-secondary text-sm leading-relaxed">{dish.description}</p>
      )}
      {dish.dietary && dish.dietary.length > 0 && <DietaryIcons tags={dish.dietary} />}
    </div>
  );
}

function SectionHeader({ eyebrow, helper }: { eyebrow: string; helper?: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h3 className="font-bricolage-grotesque text-light-gold text-xl font-bold tracking-[0.18em] uppercase sm:text-2xl">
        {eyebrow}
      </h3>
      {helper && (
        <span className="font-bricolage-grotesque border-gold/40 bg-wine/40 text-light-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
          {helper}
        </span>
      )}
    </div>
  );
}

function NumberedList({ items, columns = 2 }: { items: NormalizedDish[]; columns?: 2 | 3 }) {
  return (
    <ol
      className={cn("grid gap-x-12 gap-y-7", columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2")}
    >
      {items.map((dish, i) => (
        <li key={dish.key} className="flex gap-4">
          <span className="font-bricolage-grotesque text-gold/70 pt-1 text-xs font-semibold tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="border-gold/30 flex-1 border-l pl-4">
            <DishBlock dish={dish} compact />
          </div>
        </li>
      ))}
    </ol>
  );
}

function FixedPlusOneOf({ fixed, options }: { fixed: FamilySetDish; options: FamilySetDish[] }) {
  return (
    <div className="space-y-7">
      {/* Anchor: fixed dish */}
      <div className="flex gap-4">
        <div className="pt-1">
          <span className="font-bricolage-grotesque border-gold/40 bg-darkest-wine text-light-gold inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-semibold tracking-[0.22em] uppercase">
            Included
          </span>
        </div>
        <div className="border-gold/30 flex-1 border-l pl-4">
          <DishBlock dish={normalizeFamilyDish(fixed)} compact />
        </div>
      </div>

      {/* Connector */}
      <div className="flex items-center gap-3 px-1">
        <span className="bg-gold/25 h-px flex-1" />
        <span className="font-bricolage-grotesque border-gold/40 bg-darkest-wine text-light-gold rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
          + Choose 1
        </span>
        <span className="bg-gold/25 h-px flex-1" />
      </div>

      <NumberedList items={options.map(normalizeFamilyDish)} columns={3} />
    </div>
  );
}

function DessertSection({ count }: { count: 1 | 2 }) {
  return (
    <section>
      <SectionHeader eyebrow="Dessert" helper={count === 2 ? "Choose 2" : "Choose 1"} />
      <NumberedList items={coquitlamDesserts.map(normalizeMenuItem)} />
    </section>
  );
}

function BookletCover({ heading, priceLine }: { heading: string; priceLine: string }) {
  const [forX, perPerson] = priceLine.split(" — ");
  return (
    <header className="px-6 pt-12 pb-10 text-center sm:px-12 sm:pt-16 sm:pb-14">
      <MinimalOrnament />
      <h2 className="font-bricolage-grotesque text-light-gold mt-6 text-3xl font-bold tracking-[0.16em] uppercase sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      <div className="font-bricolage-grotesque border-gold/40 bg-wine/30 divide-gold/30 mx-auto mt-6 inline-flex items-center divide-x rounded-sm border">
        <div className="text-light-gold px-5 py-3 text-base font-bold tracking-[0.22em] uppercase sm:text-lg">
          {forX}
        </div>
        <div className="text-secondary px-5 py-3 text-sm sm:text-base">{perPerson}</div>
      </div>
    </header>
  );
}

function BookletDisclaimer() {
  return (
    <footer className="border-gold/30 border-t px-6 pt-8 pb-10 sm:px-12">
      <MinimalOrnament />
      <p className="text-secondary mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed whitespace-pre-line italic">
        {familySetDisclaimer}
      </p>
    </footer>
  );
}

function Booklet({
  id,
  heading,
  priceLine,
  children,
}: {
  id: string;
  heading: string;
  priceLine: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-gold/40 bg-dark-wine mx-auto my-10 w-full max-w-6xl scroll-mt-20 rounded-sm border shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] 2xl:max-w-340"
    >
      <div className="relative">
        <div className="border-gold/25 pointer-events-none absolute inset-3 rounded-sm border" />
        <div className="relative">
          <BookletCover heading={heading} priceLine={priceLine} />
          <div className="space-y-12 px-6 pb-12 sm:space-y-14 sm:px-12 sm:pb-16">{children}</div>
          <BookletDisclaimer />
        </div>
      </div>
    </section>
  );
}

function For2Booklet() {
  const d = familySetFor2;
  return (
    <Booklet id="cq_family_for_2" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader eyebrow="First Course" helper="Choose 1" />
        <NumberedList items={d.firstCourse.options.map(normalizeFamilyDish)} />
      </section>

      <section>
        <SectionHeader eyebrow="Second Course" helper="Choose 1" />
        <NumberedList items={d.secondCourse.options.map(normalizeFamilyDish)} />
      </section>

      <section>
        <SectionHeader eyebrow="Third Course" />
        <FixedPlusOneOf fixed={d.thirdCourse.fixed} options={d.thirdCourse.oneOf} />
      </section>

      <DessertSection count={1} />
    </Booklet>
  );
}

function For4Booklet() {
  const d = familySetFor4;
  return (
    <Booklet id="cq_family_for_4" heading={d.heading} priceLine={d.priceLine}>
      <section>
        <SectionHeader eyebrow="Shared at the table" helper={`All included`} />
        <NumberedList items={d.included.map(normalizeFamilyDish)} />
      </section>

      {/* Connector — separates the included list from the choose-ones */}
      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="bg-gold/25 h-px flex-1" />
        <span className="font-bricolage-grotesque border-gold/40 bg-darkest-wine text-light-gold rounded-full border px-4 py-1 text-[11px] font-semibold tracking-[0.25em] uppercase">
          Plus, for the table
        </span>
        <span className="bg-gold/25 h-px flex-1" />
      </div>

      <section>
        <SectionHeader eyebrow="Noodle Soup" helper="Choose 1" />
        <p className="text-secondary mb-5 text-sm leading-relaxed">{d.noodleSoupIntro}</p>
        <NumberedList items={classicNoodleSoup.map(normalizeMenuItem)} />
      </section>

      <section>
        <SectionHeader eyebrow="Signature Entrée" helper="Choose 1" />
        <NumberedList items={d.entreeChoices.map(normalizeFamilyDish)} columns={3} />
      </section>

      <DessertSection count={2} />
    </Booklet>
  );
}

export function FamilySetContent() {
  return (
    <>
      <div className="px-3 sm:px-6">
        <FamilySetPillNav />
      </div>

      <div className="px-3 sm:px-6">
        <For2Booklet />
        <For4Booklet />
      </div>
    </>
  );
}
