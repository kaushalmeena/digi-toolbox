import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeHex } from "../utils";

const StringToHexPage: FunctionComponent = () => {
  return (
    <Page
      heading="String to Hex"
      subHeading="Convert String to Hexadecimal online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeHex}
    />
  );
};

export default StringToHexPage;
