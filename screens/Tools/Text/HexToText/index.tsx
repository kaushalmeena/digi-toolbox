import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertHexToText } from "./utils";

const HexToTextPage: FunctionComponent = () => {
  return (
    <Page
      heading="Hex to Text"
      subHeading="Convert Hexadecimal to Text online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={convertHexToText}
    />
  );
};

export default HexToTextPage;
