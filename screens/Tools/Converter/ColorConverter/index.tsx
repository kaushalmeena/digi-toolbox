import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { convertColor } from "./utils";

const ColorConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Color Converter"
      subHeading="Quickly convert a colors between hex, hsl and rgb formats"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-csv"
      convertFunction={convertColor}
    />
  );
};

export default ColorConverter;
