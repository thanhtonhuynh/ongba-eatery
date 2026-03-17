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
        src={"/ong-ba.png"}
        alt="Ong Ba"
        width={width}
        height={height}
        className="border-gold w-full rounded-tl-[60px] rounded-br-[60px] border object-cover sm:rounded-tl-[80px] sm:rounded-br-[80px] md:rounded-tl-[100px] md:rounded-br-[100px]"
      />
    </div>
  );
}
