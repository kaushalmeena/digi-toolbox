import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { extractTextFromXML } from "./utils";

function ExtractTextFromXMLPage() {
  return (
    <Page
      heading="Extract Text from XML"
      subHeading="Quickly extract text content from XML code"
      fileExtension="txt"
      fileType="plain/text"
      convertFunction={extractTextFromXML}
    />
  );
}

export default ExtractTextFromXMLPage;
