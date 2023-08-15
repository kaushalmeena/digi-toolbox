import React from "react";
import HeaderSection from "../HeaderSection";
import ConvertSection from "./ConvertSection";

type DataConvertPageProps = {
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
};

export default function DataConvertPage({
  heading,
  subHeading,
  fileExtension,
  fileType,
  switchURL,
  convertFunction
}: DataConvertPageProps) {
  return (
    <>
      <HeaderSection heading={heading} subHeading={subHeading} />
      <ConvertSection
        fileExtension={fileExtension}
        fileType={fileType}
        switchURL={switchURL}
        convertFunction={convertFunction}
      />
    </>
  );
}