import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeHTML } from "./utils";

const EncodeHTMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="Encode HTML"
      subHeading="Encode HTML to Text online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeHTML}
    />
  );
};

export default EncodeHTMLPage;
