import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { decodeBase64 } from "./utils";

const DecodeBase64Page: FunctionComponent = () => {
  return (
    <Page
      heading="Decode Base64"
      subHeading="Decode from Base64 to Text Converter"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeBase64}
    />
  );
};

export default DecodeBase64Page;
