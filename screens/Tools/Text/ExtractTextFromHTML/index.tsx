import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { extractTextFromHTML } from "../utils";

const ExtractTextFromHTMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="Extract Text from HTML"
      subHeading="Extract Text Values from HTML online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={extractTextFromHTML}
    />
  );
};

export default ExtractTextFromHTMLPage;
