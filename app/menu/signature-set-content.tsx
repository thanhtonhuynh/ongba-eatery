"use client";

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
        <For2Booklet />
        <For4Booklet />
      </div>
    </>
  );
}
