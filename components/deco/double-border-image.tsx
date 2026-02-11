import { cn } from "@/lib/utils";
import Image from "next/image";

export function DoubleBorderImage({
  objectPosition = "object-center",
  className,
  img,
  alt,
  dim = false,
}: {
  objectPosition?: string;
  className?: string;
  img: string;
  alt: string;
  dim?: boolean;
}) {
  return (
    <div className="border-gold border p-1.5">
      <div className={cn("border-gold/50 relative h-full border", className)}>
        <Image src={img} alt={alt} fill className={cn("object-cover", objectPosition)} />
        {dim && <div className="bg-foreground/20 absolute inset-0" />}
      </div>
    </div>
  );
}
