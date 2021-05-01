import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { decodeText } from "./utils";

const DecodeTextPage: FunctionComponent = () => {
  return (
    <Page
      heading="Decode Text"
      subHeading="Decode from Text-Decoded format"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeText}
    />
  );
};

export default DecodeTextPage;
