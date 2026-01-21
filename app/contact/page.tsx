import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Heading } from "@/components/heading";
import { DoubleBorderButton } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <section className="flex flex-col items-center space-y-6 px-12 py-15">
        <Heading>Contact</Heading>

        <div className="grid w-full grid-cols-2 gap-15">
          <div className="flex flex-col space-y-6">
            <h2 className="font-titoli text-center text-2xl font-semibold tracking-wide uppercase">
              Downtown
            </h2>

            <div className="border-gold/50 relative h-80 rounded-tl-[100px] rounded-br-[100px] border">
              <Image
                src={"/interior.jpg"}
                alt={"Ông Bà Eatery"}
                fill
                className="rounded-tl-[100px] rounded-br-[100px] object-cover"
              />
            </div>

            <div className="space-y-2">
              <p>976 Denman St, Vancouver, BC V6G 2M1</p>
              <p>(+1) 604-620-5595</p>
              <p>Sun - Thu: 11:00 AM to 9:00 PM</p>
              <p>Last call: 8:45 PM</p>
              <p>Fri & Sat: 11:00 AM to 10:00 PM</p>
              <p>Last call: 9:45 PM</p>
            </div>

            <div className="self-center">
              <DoubleBorderButton
                size={"lg"}
                className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
              >
                <Link href="#">View Menu</Link>
              </DoubleBorderButton>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h2 className="font-titoli text-center text-2xl font-semibold tracking-wide uppercase">
              Coquitlam
            </h2>

            <div className="border-gold/50 relative h-80 rounded-tl-[100px] rounded-br-[100px] border">
              <Image
                src={"/hero-image.jpg"}
                alt={"Ông Bà Eatery"}
                fill
                className="rounded-tl-[100px] rounded-br-[100px] object-cover"
              />
            </div>

            <div className="space-y-2">
              <p>1163 Pinetree Wy Unit 1045, Coquitlam, BC V3B 7Z3</p>
              <p>(+1) 604-620-5595</p>
              <p>Sun - Thu: 11:00 AM to 9:00 PM</p>
              <p>Last call: 8:45 PM</p>
              <p>Fri & Sat: 11:00 AM to 10:00 PM</p>
              <p>Last call: 9:45 PM</p>
            </div>

            <div className="self-center">
              <DoubleBorderButton
                size={"lg"}
                className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
              >
                <Link href="#">View Menu</Link>
              </DoubleBorderButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
