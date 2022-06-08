import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../../../styles";
import MainSection from "./MainSection";

function ImageToBase64() {
  return (
    <>
      <TopContainer>
        <H1>Image to Base64</H1>
        <H2>Quickly convert image to base64-encoded string</H2>
      </TopContainer>
      <MainSection />
    </>
  );
}

export default ImageToBase64;
