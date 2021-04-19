import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { encodeBase64 } from "../utils";

const EncodeBase64: FunctionComponent = () => {
  return (
    <Page
      heading="Encode Base64"
      subHeading="Encode String to Base64 Converter"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeBase64}
    />
  );
};

export default EncodeBase64;
