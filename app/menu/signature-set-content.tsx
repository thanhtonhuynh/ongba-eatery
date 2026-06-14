"use client";

import { Reveal } from "@/components/reveal";
import { For2Booklet } from "./components/signature-set/for-2-booklet";
import { For4Booklet } from "./components/signature-set/for-4-booklet";
import { SignatureSetPillNav } from "./components/signature-set/pill-nav";

export function SignatureSetContent() {
  return (
    <>
      <div className="px-3 sm:px-6">
        <SignatureSetPillNav />
      </div>

      <div className="px-3 sm:px-6">
        <Reveal amount={0.1}>
          <For2Booklet />
        </Reveal>
        <Reveal amount={0.1}>
          <For4Booklet />
        </Reveal>
      </div>
    </>
  );
}
