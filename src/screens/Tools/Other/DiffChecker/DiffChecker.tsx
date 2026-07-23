"use client";

import HeaderSection from "@/components/HeaderSection";
import DiffSection from "./DiffSection";

export default function DiffCheckerPage() {
  return (
    <>
      <HeaderSection
        heading="Diff-Checker"
        subHeading="Quickly compare two set of text to find differences"
      />
      <DiffSection />
    </>
  );
}
