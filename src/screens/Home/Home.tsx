"use client";

import HeaderSection from "@/components/HeaderSection";
import MainSection from "./MainSection";

export default function Home() {
  return (
    <>
      <HeaderSection
        heading="FindThatTool"
        subHeading="Every common tool you need to use, at your fingertips!"
      />
      <MainSection />
    </>
  );
}
