import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertTextToHex } from "./utils";

const TextToHexPage: FunctionComponent = () => {
  return (
    <Page
      heading="Text to Hex"
      subHeading="Quickly convert plain text to hexadecimal values"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/hex-to-text"
      convertFunction={convertTextToHex}
    />
  );
};

export default TextToHexPage;
