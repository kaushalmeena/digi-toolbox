'use client';

import React from "react";
import HeaderSection from "../../../../shared/HeaderSection";
import MainSection from "./MainSection";

function ImageToBase64() {
  return (
    <>
      <HeaderSection
        heading="Image to Base64"
        subHeading="Quickly convert image to base64-encoded string"
      />
      <MainSection />
    </>
  );
}

export default ImageToBase64;
