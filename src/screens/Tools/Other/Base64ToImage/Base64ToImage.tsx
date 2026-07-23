"use client";

import HeaderSection from "@/components/HeaderSection";
import ConvertSection from "./ConvertSection";

export default function Base64ToImagePage() {
  return (
    <>
      <HeaderSection
        heading="Base64 to Image"
        subHeading="Quickly convert base64-encoded string to image"
      />
      <ConvertSection />
    </>
  );
}
