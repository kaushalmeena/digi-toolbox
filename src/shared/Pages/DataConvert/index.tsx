import React from "react";
import HeaderSection from "../../HeaderSection";
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
      <HeaderSection heading={heading} subHeading={subHeading} />
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
