import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { unescapeText } from "./utils";

const UnescapeTextPage: FunctionComponent = () => {
  return (
    <Page
      heading="Unescape Text"
      subHeading="Quickly remove slashes from previously slash-escaped text"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={unescapeText}
    />
  );
};

export default UnescapeTextPage;
