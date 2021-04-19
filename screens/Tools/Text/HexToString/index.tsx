import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { decodeHex } from "../utils";

const HexToStringPage: FunctionComponent = () => {
  return (
    <Page
      heading="Hex to String"
      subHeading="Convert Hexadecimal to String online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeHex}
    />
  );
};

export default HexToStringPage;
