import LogoGold from "@/assets/logo-gold.png";
import Image from "next/image";
import Link from "next/link";
import { DoubleBorderButton } from "../ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100dvh-116px)] flex-col place-content-center px-4">
      <Image src={"/hero-image.jpg"} alt="Hero" fill className="object-cover" />
      <div className="bg-foreground/80 absolute inset-0" />

      <div className="z-10 flex flex-col items-center gap-6 sm:gap-8">
        <Image src={LogoGold} alt="Ongba's Logo" className="h-auto w-40 sm:w-52 md:w-60" />

        <div className="flex flex-col items-center gap-1 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="font-light">Honouring</span>
          <span className="font-titoli">Vietnamese tradition</span>
          <span>
            <span className="text-xl font-light sm:text-2xl md:text-3xl">with a</span>{" "}
            <span className="font-titoli">modern twist</span>
          </span>
        </div>

        <DoubleBorderButton nativeButton={false} render={<Link href="#">Reserve a table</Link>} />
      </div>
    </section>
  );
}
