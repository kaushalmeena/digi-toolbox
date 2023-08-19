"use client";

import HeaderSection from "@/components/HeaderSection";
import PickerSection from "./PickerSection";

export default function ImageColorPickerPage() {
  return (
    <>
      <HeaderSection
        heading="Image Color Picker"
        subHeading="Quickly pick color from image"
      />
      <PickerSection />
    </>
  );
}
