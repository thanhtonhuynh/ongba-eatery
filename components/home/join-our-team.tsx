import LogoGold from "@/assets/logo-gold.png";
import Image from "next/image";
import Link from "next/link";
import { OrnamentLine } from "../deco/ornament-line";
import { Typography } from "../typography";
import { DoubleBorderButton } from "../ui/button";

export function JoinOurTeam() {
  return (
    <section className="bg-dark-wine space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="flex flex-col items-center gap-6 pb-3 sm:gap-8 sm:p-6">
        <Typography variant="h1">Join Our Team</Typography>

        <Typography variant="body">
          At Ông Bà, we believe food is more than just what's on the plate - it's about connection,
          family, and creating moments that feed the soul.
        </Typography>

        <Typography variant="body">
          We're always looking for dedicated, enthusiastic, and curious people to join our growing
          family.
        </Typography>

        <Image src={LogoGold} alt="Ongba's Logo" className="h-40 w-auto sm:h-52 md:h-60" />

        <DoubleBorderButton
          nativeButton={false}
          render={<Link href={"/careers"}>Join Our Team</Link>}
        />
      </div>
    </section>
  );
}
