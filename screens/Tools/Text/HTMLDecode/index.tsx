import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { decodeHTML } from "./utils";

const DecodeHTMLPage: FunctionComponent = () => {
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
};

export default DecodeHTMLPage;
