import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { extractTextFromHTML } from "./utils";

function ExtractTextFromHTMLPage() {
  return (
    <Page
      heading="Extract Text from HTML"
      subHeading="Quickly extract text content from HTML code"
      fileExtension="txt"
      fileType="plain/text"
      convertFunction={extractTextFromHTML}
    />
  );
}

export default ExtractTextFromHTMLPage;
