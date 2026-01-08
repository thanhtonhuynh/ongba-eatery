import { cn } from "@/lib/utils";
import Image from "next/image";

export function DoubleBorderImage({
  className,
  img,
  alt,
  dim = false,
}: {
  className?: string;
  img: string;
  alt: string;
  dim?: boolean;
}) {
  return (
    <div className="border-gold border p-1.5">
      <div className={cn("border-gold/50 relative h-full border", className)}>
        <Image src={img} alt={alt} fill className="object-cover" />
        {dim && <div className="bg-foreground/20 absolute inset-0" />}
      </div>
    </div>
  );
}
