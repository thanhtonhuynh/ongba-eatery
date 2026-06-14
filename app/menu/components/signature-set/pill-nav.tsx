const navCategories = [
  { key: "cq_signature_for_2", title: "For 2" },
  { key: "cq_signature_for_4", title: "For 4" },
];

/** Pill-style anchor nav — signature-set only. All-day / Desserts use the simple `MenuNav`. */
export function SignatureSetPillNav() {
  return (
    <nav className="font-bricolage-grotesque flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {navCategories.map((c) => (
          <li key={c.key}>
            <a
              href={`#${c.key}`}
              className="group border-gold/40 text-light-gold hover:text-darkest-wine focus-visible:ring-gold/60 relative inline-flex items-center justify-center overflow-hidden rounded-full border px-7 py-2.5 text-xs font-semibold tracking-[0.24em] uppercase transition-colors duration-300 outline-none focus-visible:ring-2 sm:px-9 sm:py-3 sm:text-sm"
            >
              {/* animated fill — sweeps in from the bottom */}
              <span
                aria-hidden="true"
                className="bg-light-gold absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />
              <span className="relative">{c.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
