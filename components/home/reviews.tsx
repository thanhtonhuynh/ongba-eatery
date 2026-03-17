import { OrnamentLine } from "../deco/ornament-line";
import { Typography } from "../typography";

export function Reviews() {
  return (
    <section className="bg-dark-wine space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col gap-6 rounded-2xl border p-6 sm:gap-8 sm:p-12">
        <div>
          <Typography variant="body">
            &quot;... Broth is rich and flavourful, and the interior is very cute as well. Recipes
            are all passed down from the employees&apos; grandparents which is nice.&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Nicole Fung
          </Typography>
        </div>

        <div>
          <Typography variant="body">
            &quot;This is a place that is absolutely the BEST pho, love the environment, the food is
            absolutely ridiculously AWESOME!! Always worth a visit.&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Annie Gu
          </Typography>
        </div>

        <div>
          <Typography variant="body">
            &quot;Love the food, the decor and the backstory of the restaurant. A true Canadian
            origin story about a family&apos;s quest for a better life and what lengths people will
            go to just to be Free!&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            RJ Sachs
          </Typography>
        </div>

        <div>
          <Typography variant="body">
            &quot;Consistently great food and good prices, one of my favourite places to
            eat...&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Jonathan Leung
          </Typography>
        </div>

        <div>
          <Typography variant="body">
            &quot;Food here is unique that I don&apos;t find any other Vietnamese restaurant.&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Yuka s
          </Typography>
        </div>
      </div>
    </section>
  );
}
