import { signatureSetDisclaimer } from "@/_data/coquitlam-signature-set";
import { MinimalOrnament } from "@/components/deco/ornament-line";

type BookletCoverProps = {
  heading: string;
  priceLine: string;
};

function BookletCover({ heading, priceLine }: BookletCoverProps) {
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
