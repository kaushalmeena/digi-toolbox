import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { decodeBase64 } from "../utils";

const DecodeBase64: FunctionComponent = () => {
  return (
    <Page
      heading="Decode Base64"
      subHeading="Decode from Base64 to String Converter"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeBase64}
    />
  );
};

export default DecodeBase64;
