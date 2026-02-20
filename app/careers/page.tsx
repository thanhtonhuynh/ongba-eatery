import { teamMembers } from "@/_data/people";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";
import { DoubleBorderButton } from "@/components/ui/button";
import Link from "next/link";
import { PersonCard } from "./person-card";

export default function CareersPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <section className="flex flex-col items-center space-y-6 px-4 py-10 sm:py-15">
        <Typography variant="h1">Careers</Typography>

        <div className="max-w-3xl space-y-4 p-4 text-sm sm:space-y-6 sm:p-6 sm:text-base">
          <p>
            At Ongba Eatery, we believe food is more than just what&apos;s on the plate — it&apos;s
            about connection, family, and creating moments that feed the soul. For us, a restaurant
            is not just a workplace; it&apos;s a home where passion, tradition, and modern
            creativity come together.
          </p>
          <p>
            We&apos;re always looking for dedicated, enthusiastic, and curious people to join our
            growing family. Whether you&apos;re an experienced chef, a hospitality professional, or
            someone with a big heart and a love for Vietnamese food, there&apos;s a place for you
            here. Work in a supportive, family-oriented environment. Be part of a team that values
            tradition while embracing innovation. Share in our mission to bring soulful, modern
            Vietnamese cuisine to our community. Grow with us as we expand into new locations and
            new opportunities.
          </p>
          <p>
            If you&apos;re passionate about food, love working with people, and want to be part of a
            team that feels like family, we&apos;d love to hear from you.
          </p>
        </div>

        <DoubleBorderButton
          size={"lg"}
          className="font-titoli h-12 px-6 py-5 text-base tracking-wide uppercase sm:h-14 sm:px-8 sm:py-6 sm:text-xl"
        >
          <Link href="#">Apply Now</Link>
        </DoubleBorderButton>
      </section>

      <section className="bg-dark-wine space-y-4 p-4 sm:space-y-6 sm:p-6">
        <OrnamentLine />

        <h2 className="font-titoli text-center text-2xl font-semibold tracking-widest uppercase sm:text-3xl md:text-4xl">
          Our Ongba Family
        </h2>

        <div className="flex flex-col items-center gap-6">
          <PersonCard person={teamMembers[0]} />

          <ul className="mt-3 flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:gap-12">
            {teamMembers.slice(1).map((person, idx) => (
              <li key={idx}>
                <PersonCard person={person} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
