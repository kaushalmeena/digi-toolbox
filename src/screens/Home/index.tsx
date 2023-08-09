'use client'
import React from "react";
import MainSection from "./MainSection";
import HeaderSection from "@/components/HeaderSection";

export default function Home() {
  return (
    <>
      <HeaderSection
        heading="GetThatTool"
        subHeading="Every common tool you need to use, at your fingertips!"
      />
      <MainSection />
    </>
  );
}