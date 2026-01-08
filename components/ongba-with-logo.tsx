import LogoGold from "@/assets/logo-gold.png";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
};

export function OngbaWithLogo({ width, height }: Props) {
  return (
    <div className="relative">
      <Image
        src={LogoGold}
        alt="Ongba's Logo"
        className="absolute top-1/4 left-1/2 h-1/3 w-auto -translate-x-1/2 -translate-y-1/2"
      />

      <Image
        src={"/story-overview.png"}
        alt="Our Story"
        width={width}
        height={height}
        className="border-gold rounded-tl-[100px] rounded-br-[100px] border object-cover"
      />
    </div>
  );
}
