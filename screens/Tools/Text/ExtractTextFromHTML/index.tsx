import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { extractTextFromHTML } from "../utils";

const ExtractTextFromHTML: FunctionComponent = () => {
  return (
    <Page
      heading="Extract Text from HTML"
      subHeading="Extract Text Values from HTML Online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={extractTextFromHTML}
    />
  );
};

export default ExtractTextFromHTML;
