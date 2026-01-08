import { OrnamentLine } from "@/components/deco/ornament-line";
import { OngbaWithLogo } from "@/components/ongba-with-logo";

export function Overview() {
  return (
    <section className="bg-dark-wine space-y-6 p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col items-center gap-8 border p-6">
        <h2 className="text-xl font-semibold tracking-widest uppercase">
          Ông Bà Vietnamese Eatery
        </h2>

        <OngbaWithLogo width={281} height={374} />

        <div className="flex w-full max-w-xl flex-col gap-8">
          <p>
            We named the restaurant Ông Bà — which means “grandparents” in Vietnamese — in honour of
            our parents, Bố and Mẹ, whose love, faith, and courage built the foundation of our
            family.
          </p>
          <p>
            They crossed the ocean with nothing but hope and compassion, and spent their lives
            helping others find safety, comfort, and belonging. Their home was always open, their
            table always full, even when they had little to give.
          </p>
          <p>
            By naming our restaurant Ông Bà, we hope to keep their spirit alive — a reminder for our
            child, and for every generation to come, of the love and sacrifice that carried us here.
          </p>
          <p>
            Ông Bà is more than a restaurant; it’s a continuation of their promise — a place where
            love, food, and laughter are shared freely, and where everyone is treated like family.
          </p>
        </div>
      </div>
    </section>
  );
}
