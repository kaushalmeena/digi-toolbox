import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { convertHexToText } from "./utils";

function HexToTextPage() {
  return (
    <Page
      heading="Hex to Text"
      subHeading="Quickly convert hexadecimal to readable text."
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/text-to-hex"
      convertFunction={convertHexToText}
    />
  );
}

export default HexToTextPage;
