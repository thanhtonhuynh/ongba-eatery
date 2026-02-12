import { OrnamentLine } from "../deco/ornament-line";
import { Heading } from "../heading";

export function Footer() {
  return (
    <footer>
      <section className="bg-dark-wine flex flex-col space-y-4 p-4 sm:space-y-6 sm:p-6">
        <OrnamentLine />

        <div className="border-gold/50 flex flex-col gap-6 border p-4 sm:gap-8 sm:p-6">
          <Heading className="self-center">Find Us</Heading>

          <div className="text-sm sm:text-base">
            <p className="uppercase">Open 7 days a week</p>
            <p>Sun - Thu: 11:00 AM to 9:00 PM</p>
            <p>Last call: 8:45 PM</p>
            <p>Fri & Sat: 11:00 AM to 10:00 PM</p>
            <p>Last call: 9:45 PM</p>
          </div>

          <div className="border-gold/50 h-px border-t border-dashed" />

          <div>
            <h2 className="font-extrabold uppercase">Downtown</h2>
            <p>976 Denman St, Vancouver, BC V6G 2M1</p>
            <p>Phone: (+1) 604-620-5595</p>

            <h2 className="mt-2 font-extrabold uppercase">Coquitlam</h2>
            <p>1163 Pinetree Wy Unit 1045, Coquitlam, BC V3B 7Z3</p>
            <p>Phone: (+1) 604-620-5595</p>
          </div>

          <div>
            <p>Email: ongbavietnamese@gmail.com</p>
          </div>
        </div>
      </section>

      <section className="bg-dark-night flex flex-col items-center gap-2 p-4 text-center text-sm sm:text-base">
        <p>Crafted from the freshest ingredients and rooted in family values to feed the soul</p>
        <p>
          Copyright &copy; {new Date().getFullYear()}, Ông Bà Vietnamese Eatery. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
}
