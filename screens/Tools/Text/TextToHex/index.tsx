import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeHex } from "../utils";

const TextToHexPage: FunctionComponent = () => {
  return (
    <Page
      heading="Text to Hex"
      subHeading="Convert Text to Hexadecimal online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeHex}
    />
  );
};

export default TextToHexPage;
