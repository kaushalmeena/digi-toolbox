import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertHexToText } from "./utils";

const HexToTextPage: FunctionComponent = () => {
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
};

export default HexToTextPage;
