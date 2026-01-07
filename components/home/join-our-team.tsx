import LogoGold from "@/assets/logo-gold.png";
import Image from "next/image";
import { OrnamentLine } from "../deco/ornament-line";
import { Heading } from "../heading";
import { DoubleBorderButton } from "../ui/button";

export function JoinOurTeam() {
  return (
    <section className="bg-dark-wine space-y-6 p-6">
      <OrnamentLine />

      <div className="flex flex-col items-center gap-8 p-6">
        <Heading>Join Our Team</Heading>

        <p>
          At Ông Bà, we believe food is more than just what's on the plate - it's about connection,
          family, and creating moments that feed the soul.
        </p>

        <p>
          We're always looking for dedicated, enthusiastic, and curious people to join our growing
          family.
        </p>

        <Image src={LogoGold} alt="Ongba's Logo" className="h-60 w-auto" />

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          Join Our Team
        </DoubleBorderButton>
      </div>
    </section>
  );
}
