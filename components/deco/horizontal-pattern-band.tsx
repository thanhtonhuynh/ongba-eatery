import { cn } from "@/lib/utils";

type Props = {
  blurBottom?: boolean;
  blurTop?: boolean;
  fromColor?: string;
  toColor?: string;
};

export function HorizontalPatternBand({
  blurBottom = false,
  blurTop = false,
  fromColor = "from-darkest-wine/5",
  toColor = "to-darkest-wine",
}: Props) {
  return (
    <div className="bg-wine relative h-22 w-full">
      <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[350px] bg-position-[left_76%] bg-repeat-x opacity-50" />

      {blurBottom && <div className={cn("absolute inset-0 bg-linear-to-b", fromColor, toColor)} />}

      {blurTop && <div className={cn("absolute inset-0 bg-linear-to-b", fromColor, toColor)} />}
    </div>
  );
}
