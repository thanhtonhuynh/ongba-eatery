type Props = {
  blurBottom?: boolean;
};

export function HorizontalPatternBand({ blurBottom = false }: Props) {
  return (
    <div className="bg-wine relative h-22 w-full">
      <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[350px] bg-position-[left_76%] bg-repeat-x opacity-50" />

      {blurBottom && (
        <div className="to-darkest-wine from-darkest-wine/5 absolute inset-0 bg-linear-to-b" />
      )}
    </div>
  );
}
