import { OrnamentLine } from "../deco/ornament-line";
import { Typography } from "../typography";

export function Reviews() {
  return (
    <section className="bg-dark-wine space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col gap-6 rounded-2xl border p-6 sm:gap-8 sm:p-12">
        <div>
          <Typography variant="body">
            &quot;I was truly blown away by Ông Bà Eatery, every single dish captured the authentic
            flavours of Vietnam with remarkable precision.&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Helen Tran
          </Typography>
        </div>

        <div>
          <Typography variant="body">
            &quot;This is one of my favourite places to eat when I&apos;m back in Vancouver. Try the
            deep-fried enoki mushroom - it&apos;s crazy!&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Zack Enderson
          </Typography>
        </div>

        <div>
          <Typography variant="body">
            &quot;We happened to pass by a small restaurant simply decorated with patterned
            tiles.&quot;
          </Typography>
          <Typography variant="body-sm" className="font-bold italic">
            Chloe Dang
          </Typography>
        </div>
      </div>
    </section>
  );
}
