import Image from "next/image";

/** Hairline rules flanking a small star */
export function HairlineStar() {
  return (
    <div className="flex items-center gap-3" aria-hidden>
      <span className="bg-gold/45 h-px w-16" />
      <Image src="/star-filled.svg" alt="" width={16} height={16} />
      <span className="bg-gold/45 h-px w-16" />
    </div>
  );
}
