import { OrnamentLine } from "../deco/ornament-line";
import { Heading } from "../heading";
import { DoubleBorderButton } from "../ui/button";

export function Locations() {
  return (
    <section className="space-y-6 p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col items-center gap-8 border p-6">
        <Heading>Locations</Heading>

        <p>
          Explore our locations and view each restaurant's menu, featuring signature dishes
          available only at select spots.
        </p>

        <div className="grid grid-cols-2 gap-64">
          <div className="space-y-2 text-center">
            <h2 className="font-titoli text-xl font-bold">Downtown</h2>
            <p>976 Denman St, Vancouver, BC V6G 2M1</p>
            <p>(+1) 604-620-5595</p>
          </div>

          <div className="space-y-2 text-center">
            <h2 className="font-titoli text-xl font-bold">Coquitlam</h2>
            <p>976 Denman St, Vancouver, BC V6G 2M1</p>
            <p>(+1) 604-620-5595</p>
          </div>
        </div>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide"}
        >
          View Location Details
        </DoubleBorderButton>
      </div>
    </section>
  );
}
