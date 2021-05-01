import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { escapeText } from "./utils";

const EscapeTextPage: FunctionComponent = () => {
  return (
    <Page
      heading="Escape Text"
      subHeading="Quickly escape special symbols in text with slashes"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={escapeText}
    />
  );
};

export default EscapeTextPage;
