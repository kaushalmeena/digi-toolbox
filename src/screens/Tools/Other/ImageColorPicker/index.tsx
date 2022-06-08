import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../../../styles";
import MainSection from "./MainSection";

function ImageColorPicker() {
  return (
    <>
      <TopContainer>
        <H1>Image Color Picker</H1>
        <H2>Quickly pick color from image</H2>
      </TopContainer>
      <MainSection />
    </>
  );
}

export default ImageColorPicker;
