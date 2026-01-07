import LogoGold from "@/assets/logo-gold.png";
import Image from "next/image";
import Link from "next/link";
import { DoubleBorderButton } from "../ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-var(--spacing)*16)] flex-col place-content-center">
      <Image src={"/hero-image.jpg"} alt="Hero" fill className="object-cover" />
      <div className="bg-foreground/80 absolute inset-0" />

      <div className="z-10 flex flex-col items-center gap-8">
        <Image src={LogoGold} alt="Ongba's Logo" className="h-auto w-60" />

        <p className="flex flex-col items-center gap-1 text-5xl">
          <span className="text-4xl font-light">Honouring</span>{" "}
          <span className="font-titoli">Vietnamese tradition</span>
          <span>
            {" "}
            <span className="text-3xl font-light">with a</span>{" "}
            <span className="font-titoli">modern twist</span>
          </span>
        </p>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 p-6 text-xl tracking-wide uppercase"}
        >
          <Link href="#">Reserve a table</Link>
        </DoubleBorderButton>
      </div>
    </section>
  );
}
