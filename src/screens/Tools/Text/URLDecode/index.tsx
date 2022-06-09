import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { decodeURL } from "./utils";

function URLDecodePage() {
  return (
    <Page
      heading="URL Decode"
      subHeading="Quickly URL-unescape text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/url-encode"
      convertFunction={decodeURL}
    />
  );
}

export default URLDecodePage;
