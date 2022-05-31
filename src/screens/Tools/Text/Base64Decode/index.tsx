import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { decodeBase64 } from "./utils";

function Base64DecodePage() {
  return (
    <Page
      heading="Base64 Decode"
      subHeading="Quickly decode base64-encoded text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/base64-encode"
      convertFunction={decodeBase64}
    />
  );
}

export default Base64DecodePage;
