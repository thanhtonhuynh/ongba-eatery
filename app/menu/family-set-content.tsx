"use client";

import {
  familySetDisclaimer,
  familySetFor2,
  familySetFor4,
  type FamilySetDish,
} from "@/_data/coquitlam-family-set";
import { classicNoodleSoup } from "@/_data/coquitlam-menu-items/classic-noodle-soup";
import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";
import { MenuNav } from "./menu-nav";
import { MenuSectionFrame } from "./menu-section";

const familySetNavCategories = [
  { key: "cq_family_for_2", title: "For 2" },
  { key: "cq_family_for_4", title: "For 4" },
];

/** Bordered course panel — distinct from à la carte MenuSection grids */
function FamilySetCourseCard({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-gold/25 bg-darkest-wine/35 ring-gold/10 rounded-sm border p-4 shadow-sm ring-1 sm:p-6",
        className,
      )}
    >
      <h3 className="font-bricolage-grotesque text-light-gold mb-5 text-xs font-bold tracking-[0.18em] uppercase sm:mb-6 sm:text-sm sm:tracking-[0.22em]">
        {label}
      </h3>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function DishBlock({ dish, className }: { dish: FamilySetDish; className?: string }) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <p className="text-sm font-bold tracking-tight sm:text-base">{dish.titleEn}</p>
      <Typography variant="body-sm" className="text-secondary">
        {dish.titleVi}
      </Typography>
      {dish.description && (
        <Typography variant="body-sm" className="text-secondary leading-relaxed">
          {dish.description}
        </Typography>
      )}
      {dish.note && (
        <Typography variant="body-sm" className="text-secondary/85 italic">
          {dish.note}
        </Typography>
      )}
    </div>
  );
}

/** Right-aligned bridge between mutually exclusive choices */
function OrDivider() {
  return (
    <div
      className="text-secondary py-4 text-[0.65rem] font-semibold tracking-[0.35em] uppercase sm:text-xs sm:tracking-[0.4em]"
      role="separator"
    >
      or
    </div>
  );
}

function OrOptions({ options }: { options: FamilySetDish[] }) {
  return (
    <div>
      {options.map((dish, i) => (
        <div key={dish.titleEn}>
          {i > 0 && <OrDivider />}
          <DishBlock dish={dish} />
        </div>
      ))}
    </div>
  );
}

function For2Panel() {
  const d = familySetFor2;
  return (
    <div className="space-y-10 sm:space-y-12">
      <FamilySetCourseCard label={d.firstCourse.label}>
        <OrOptions options={d.firstCourse.options} />
      </FamilySetCourseCard>

      <FamilySetCourseCard label={d.secondCourse.label}>
        <OrOptions options={d.secondCourse.options} />
      </FamilySetCourseCard>

      <FamilySetCourseCard label={d.thirdCourse.label}>
        <div className="border-gold/20 bg-wine/20 rounded-sm border p-3 sm:p-4">
          <DishBlock dish={d.thirdCourse.fixed} />
        </div>

        <div className="border-gold/35 mt-5 space-y-4 border-l-2 pl-4 sm:mt-6 sm:pl-5">
          <p className="text-light-gold text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            {d.thirdCourse.oneOfLabel}
          </p>
          <OrOptions options={d.thirdCourse.oneOf} />
        </div>
      </FamilySetCourseCard>

      <div className="border-gold/25 pt-2 text-center">
        <Typography variant="body-sm" className="text-secondary font-semibold tracking-wide">
          {d.dessertLine}
        </Typography>
      </div>
    </div>
  );
}

function For4Panel() {
  const d = familySetFor4;
  return (
    <div className="space-y-10 sm:space-y-12">
      <FamilySetCourseCard label="Included for your table">
        <ul className="divide-gold/15 divide-y">
          {d.included.map((dish) => (
            <li key={dish.titleEn} className="py-4 first:pt-0 last:pb-0">
              <DishBlock dish={dish} />
            </li>
          ))}
        </ul>
      </FamilySetCourseCard>

      <FamilySetCourseCard label="Noodle soup — choose one">
        <Typography variant="body-sm" className="text-secondary mb-4 leading-relaxed">
          {d.noodleSoupIntro}
        </Typography>
        <ul className="text-secondary space-y-2.5 text-sm leading-relaxed sm:text-base">
          {classicNoodleSoup.map((item) => (
            <li
              key={item.id}
              className="border-gold/10 flex flex-wrap gap-x-1 border-b border-dotted pb-2.5 last:border-0 last:pb-0"
            >
              <span className="font-medium">{item.subtitle}</span>
              {item.title ? <span className="text-secondary">({item.title})</span> : null}
              <span className="text-secondary/90 ml-auto tabular-nums">${item.price}</span>
            </li>
          ))}
        </ul>
      </FamilySetCourseCard>

      <FamilySetCourseCard label="Entrée — choose one">
        <OrOptions options={d.entreeChoices} />
      </FamilySetCourseCard>

      <div className="border-gold/25 pt-2 text-center">
        <Typography variant="body-sm" className="text-secondary font-semibold tracking-wide">
          {d.dessertLine}
        </Typography>
      </div>
    </div>
  );
}

export function FamilySetContent() {
  return (
    <>
      <div className="border-gold/50 border p-3 sm:p-6">
        <MenuNav categories={familySetNavCategories} />
      </div>

      <MenuSectionFrame
        id="cq_family_for_2"
        index={0}
        title="For 2"
        description={`${familySetFor2.heading}\n${familySetFor2.priceLine}`}
      >
        <For2Panel />
      </MenuSectionFrame>

      <MenuSectionFrame
        id="cq_family_for_4"
        index={1}
        title="For 4"
        description={`${familySetFor4.heading}\n${familySetFor4.priceLine}`}
      >
        <For4Panel />
      </MenuSectionFrame>

      <MenuSectionFrame id="cq_family_set_note" index={2}>
        <Typography variant="body-sm" className="text-secondary text-center italic">
          {familySetDisclaimer}
        </Typography>
      </MenuSectionFrame>
    </>
  );
}
