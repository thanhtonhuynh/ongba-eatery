import { Mail01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { Typography } from "../typography";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer>
      <section className="bg-secondary text-wine flex flex-col space-y-4 p-4 sm:space-y-6 sm:p-6">
        {/* <OrnamentLine starSrc="/star-filled-wine.svg" color="wine" /> */}

        <div className="flex flex-col gap-6 p-6 lg:px-18">
          <Typography variant="h1">Find Us</Typography>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-32">
            <div className="text-sm sm:text-base">
              <p className="uppercase">Open 7 days a week</p>
              <p>Sun - Thu: 11:00 AM to 9:00 PM</p>
              <p>Fri &amp; Sat: 11:00 AM to 10:00 PM</p>
            </div>

            <div className="space-y-2">
              {/* <div>
                <h2 className="text-lg font-bold uppercase">Vancouver</h2>
                <p>976 Denman St, Vancouver, BC V6G 2M1</p>
                <a href="tel:+16046205595">+1 (604) 620-5595</a>
              </div> */}

              <div>
                <h2 className="text-lg font-bold uppercase">Coquitlam</h2>
                <p>1163 Pinetree Wy Unit 1045, Coquitlam, BC V3B 7Z3</p>
                <a href="tel:+16046205595">+1 (604) 620-5595</a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <HugeiconsIcon icon={Mail01Icon} className="size-4" />
            <a href="mailto:restaurant@ongbagroup.com">restaurant@ongbagroup.com</a>
          </div>
        </div>
      </section>

      <section className="bg-dark-night text-secondary/80 flex flex-col items-center gap-2 p-6 text-center text-sm sm:text-base">
        <p>Crafted from the freshest ingredients and rooted in family values to feed the soul.</p>
        <p className="text-xs uppercase">
          Copyright &copy; {new Date().getFullYear()}, Ongba Eatery. All rights reserved.
        </p>
        <div className="flex items-center gap-1 text-xs">
          <span>Developed by</span>
          <Button
            nativeButton={false}
            variant={"link"}
            size={"xs"}
            className="text-secondary/80 px-0"
            render={
              <Link target="blank" href={"https://tonhuynh.ca"}>
                Ton Huynh
              </Link>
            }
          />
        </div>
      </section>
    </footer>
  );
}
