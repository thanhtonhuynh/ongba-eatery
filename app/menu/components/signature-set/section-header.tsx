type Props = {
  eyebrow: string;
  helper?: string;
};

export function SectionHeader({ eyebrow, helper }: Props) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h3 className="font-bricolage-grotesque text-light-gold text-xl font-bold tracking-[0.18em] uppercase sm:text-2xl">
        {eyebrow}
      </h3>
      {helper && (
        <span className="font-bricolage-grotesque border-gold/40 bg-wine/40 text-light-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
          {helper}
        </span>
      )}
    </div>
  );
}
