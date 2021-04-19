import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { decodeHTML } from "../utils";

const DecodeHTMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="Decode HTML"
      subHeading="Decode HTML to String online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeHTML}
    />
  );
};

export default DecodeHTMLPage;
