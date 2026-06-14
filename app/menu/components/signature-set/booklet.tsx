import { signatureSetDisclaimer } from "@/_data/coquitlam-signature-set";
import { MinimalOrnament } from "@/components/deco/ornament-line";

type BookletCoverProps = {
  heading: string;
  priceLine: string;
};

function BookletCover({ heading, priceLine }: BookletCoverProps) {
  const [forX, perPerson] = priceLine.split(" — ");
  const [amount, ...unitParts] = perPerson.split(" ");
  const unit = unitParts.join(" ");
  return (
    <header className="px-6 pt-16 pb-14 text-center sm:px-12 sm:pt-20 sm:pb-16">
      {/* title — the hero */}
      <h2 className="font-kasepi-sans text-light-gold mt-5 text-3xl font-bold tracking-widest uppercase sm:text-4xl md:text-5xl">
        {heading}
      </h2>

      {/* serving — quiet eyebrow */}
      <p className="font-kasepi-sans text-light-gold mt-8 text-lg font-semibold tracking-wide uppercase sm:text-xl">
        {forX}
      </p>

      {/* single delicate flourish */}
      <div className="mt-8">
        <MinimalOrnament />
      </div>

      {/* price — understated */}
      <p className="font-kasepi-sans text-light-gold mt-8 flex items-baseline justify-center gap-2.5">
        <span className="text-xl font-bold tracking-tight sm:text-2xl">{amount}</span>
        <span className="text-secondary text-sm font-medium tracking-wide">{unit}</span>
      </p>
    </header>
  );
}

function BookletDisclaimer() {
  return (
    <footer className="border-gold/30 border-t px-6 pt-8 pb-10 sm:px-12">
      <MinimalOrnament />
      <p className="text-secondary mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed whitespace-pre-line italic">
        {signatureSetDisclaimer}
      </p>
    </footer>
  );
}

type Props = {
  id: string;
  heading: string;
  priceLine: string;
  children: React.ReactNode;
};

export function Booklet({ id, heading, priceLine, children }: Props) {
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
