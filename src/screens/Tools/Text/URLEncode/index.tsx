import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { encodeURL } from "./utils";

function URLEncodePage() {
  return (
    <Page
      heading="URL Encode"
      subHeading="Quickly URL-escape text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/url-decode"
      convertFunction={encodeURL}
    />
  );
}

export default URLEncodePage;
