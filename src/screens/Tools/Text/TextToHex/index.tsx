import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { convertTextToHex } from "./utils";

function TextToHexPage() {
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
}

export default TextToHexPage;
