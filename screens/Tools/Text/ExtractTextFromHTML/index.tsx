import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { extractTextFromHTML } from "./utils";

const ExtractTextFromHTMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="Extract Text from HTML"
      subHeading="Quickly extract text content from HTML code"
      fileExtension="txt"
      fileType="plain/text"
      convertFunction={extractTextFromHTML}
    />
  );
};

export default ExtractTextFromHTMLPage;
