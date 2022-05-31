import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { encodeHTML } from "./utils";

function EncodeHTMLPage() {
  return (
    <Page
      heading="HTML Encode"
      subHeading="Quickly convert all plain text characters to HTML entities"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/html-decode"
      convertFunction={encodeHTML}
    />
  );
}

export default EncodeHTMLPage;
