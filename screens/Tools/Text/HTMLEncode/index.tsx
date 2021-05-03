import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeHTML } from "./utils";

const EncodeHTMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="HTML Encode"
      subHeading="Quickly convert all plain text characters to HTML entities"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/html-decode"
      convertFunc={encodeHTML}
    />
  );
};

export default EncodeHTMLPage;
