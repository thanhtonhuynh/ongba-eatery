"use client";

import { useState } from "react";
import { Star } from "../deco/star";

type Slide = {
  src: string;
  name: string;
  nameEn: string;
};

const slides: Slide[] = [
  {
    src: "/menu/chef-specialty/bo_ne.png",
    name: "Bò Né",
    nameEn: "Sizzling Beef on Skillet",
  },
  {
    src: "/menu/chef-specialty/fish_dish.png",
    name: "Cá Ba Sa Chiên Xù",
    nameEn: "Ông's Favourite Fish Dish",
  },
  {
    src: "/menu/chef-specialty/pho_rib.png",
    name: "Phở Sườn Bò",
    nameEn: "Fall-off-the-Bone Beef Rib Phở",
  },
  {
    src: "/menu/chef-specialty/bun_moc.png",
    name: "Bún Mọc Sườn Chua",
    nameEn: "Hà Nội Pork Rib & Meatball Vermicelli",
  },
  {
    src: "/menu/chef-specialty/bun-bo-hue-rib.png",
    name: "Bún Bò Huế Sườn Bò",
    nameEn: "Beef Rib Bún Bò Huế",
  },
  {
    src: "/menu/chef-specialty/bun_ca_cham.png",
    name: "Bún Cá Chấm",
    nameEn: "Hà Nội Fish Vermicelli Platter",
  },
  {
    src: "/menu/noodle-soup/trio_pho.png",
    name: "Phở Đặc Biệt",
    nameEn: "Trio Beef Phở",
  },
  {
    src: "/menu/banh-mi/beef_banh_mi.png",
    name: "Bánh Mì Bò Xào Tỏi",
    nameEn: "Sautéed Beef Bánh Mì",
  },
  {
    src: "/menu/appetizer/goi_du_du.png",
    name: "Gỏi Đu Đủ",
    nameEn: "Papaya Salad",
  },
  {
    src: "/menu/drink/ca-phe-muoi.png",
    name: "Cà Phê Muối",
    nameEn: "Salted Foam Vietnamese Coffee",
  },
];

export function MenuOverview() {
  const total = slides.length;
  const [idx, setIdx] = useState(0);
  const current = slides[idx];

  return (
    <section className="bg-darkest-wine relative w-full overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24">
      {/* Top eyebrow strip */}
      <div className="mx-auto mb-12 flex max-w-6xl items-center gap-6 px-8 sm:mb-16">
        <span className="bg-gold/25 h-px flex-1" />
        <Star />
        <span className="bg-gold/25 h-px flex-1" />
      </div>

      {/* Heading + active dish meta */}
      <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 items-end gap-10 px-8 sm:mb-16 md:grid-cols-[1.4fr_1fr]">
        <h2 className="font-kasepi-sans text-gold text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] font-medium tracking-tight">
          Traditional
          <br />
          <em className="text-light-gold/90 font-light italic">flavours,</em>{" "}
          <span className="text-gold">modern</span>{" "}
          <span className="text-light-gold/90 font-light italic">soul.</span>
        </h2>

        {/* <div className="flex flex-col gap-3 md:items-end md:text-right">
          <span className="font-bricolage-grotesque text-secondary text-[10px] font-semibold tracking-[0.4em] uppercase tabular-nums">
            Now showing · {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <motion.div
            key={`name-${idx}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h3 className="font-bricolage-grotesque text-gold text-2xl font-medium sm:text-3xl">
              {current.name}
            </h3>
            <p className="font-bricolage-grotesque text-secondary mt-2 text-xs font-semibold tracking-[0.24em] sm:text-sm">
              {current.nameEn}
            </p>
          </motion.div>
        </div> */}
      </div>

      {/* <ArchCarousel
        slides={slides.map((s) => ({ src: s.src, alt: `${s.name} — ${s.nameEn}` }))}
        onActiveChange={setIdx}
        action={<AnimatedSingleBorderButton size="lg" href="/menu" text="View Menu" />}
      /> */}
    </section>
  );
}
