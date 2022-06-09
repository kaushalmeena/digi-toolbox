import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { decodeHTML } from "./utils";

function DecodeHTMLPage() {
  return (
    <Page
      heading="HTML Decode"
      subHeading="Quickly convert HTML entities to plain text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/html-encode"
      convertFunction={decodeHTML}
    />
  );
}

export default DecodeHTMLPage;
