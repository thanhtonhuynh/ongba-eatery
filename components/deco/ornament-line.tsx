import Image from "next/image";

export function OrnamentLine() {
  return (
    <div className="relative flex items-center justify-center gap-2">
      <div className="border-gold/50 h-px flex-1 border-t border-dashed" />
      <Image src="/star-filled.svg" alt="Star" width={30} height={30} />
      <div className="border-gold/50 h-px flex-1 border-t border-dashed" />
    </div>
  );
}
