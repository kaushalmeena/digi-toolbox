import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertTextToHex } from "./utils";

const TextToHexPage: FunctionComponent = () => {
  return (
    <Page
      heading="Text to Hex"
      subHeading="Quickly convert plain text to hexadecimal values"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={convertTextToHex}
    />
  );
};

export default TextToHexPage;
