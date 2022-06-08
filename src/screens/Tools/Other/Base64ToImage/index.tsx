import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../../../styles";
import MainSection from "./MainSection";

function Base64ToImage() {
  return (
    <>
      <TopContainer>
        <H1>Base64 to Image</H1>
        <H2>Quickly convert base64-encoded string to image</H2>
      </TopContainer>
      <MainSection />
    </>
  );
}

export default Base64ToImage;
