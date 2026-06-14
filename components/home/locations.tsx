import { OrnamentLine } from "../deco/ornament-line";
import { Typography } from "../typography";
import { AnimatedButton } from "../ui/button";

export function Locations() {
  return (
    <section className="bg-dark-wine flex min-h-[50svh] flex-col space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="flex flex-1 flex-col items-center justify-center gap-6 pb-3 sm:gap-8 sm:p-6">
        <Typography variant="h1">Locations</Typography>

        <Typography variant="body">
          Explore our locations and view each restaurant&apos;s menu, featuring signature dishes
          available only at select spots.
        </Typography>

        <div className="my-6 flex w-full max-w-6xl flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="space-y-2">
            <Typography variant="h3">Vancouver</Typography>
            <Typography variant="body-sm">
              <div>976 Denman St, Vancouver, BC V6G 2M1</div>
              <div>(+1) 604-620-5595</div>
            </Typography>
          </div>

          <div className="space-y-2">
            <Typography variant="h3">Coquitlam</Typography>
            <Typography variant="body-sm">
              <div>1045 - 1163 Pinetree Way, Coquitlam, BC V3B 7Z3</div>
              <div>(+1) 604 554 1166</div>
            </Typography>
          </div>
        </div>

        <AnimatedButton size="xl" href="/locations" text="View Locations" />
      </div>
    </section>
  );
}
