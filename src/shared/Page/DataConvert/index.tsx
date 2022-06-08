import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../../styles";
import MainSection from "./MainSection";

type DataConvertProps = {
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
};

function DataConvert({
  heading,
  subHeading,
  fileExtension,
  fileType,
  switchURL,
  convertFunction
}: DataConvertProps) {
  return (
    <>
      <TopContainer>
        <H1>{heading}</H1>
        <H2>{subHeading}</H2>
      </TopContainer>
      <MainSection
        fileExtension={fileExtension}
        fileType={fileType}
        switchURL={switchURL}
        convertFunction={convertFunction}
      />
    </>
  );
}

export default DataConvert;
