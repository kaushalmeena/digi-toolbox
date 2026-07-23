"use client";

import HeaderSection from "@/components/HeaderSection";
import ConvertSection from "./ConvertSection";

export default function ImageToBase64Page() {
  return (
    <>
      <HeaderSection
        heading="Image to Base64"
        subHeading="Quickly convert image to base64-encoded string"
      />
      <ConvertSection />
    </>
  );
}
