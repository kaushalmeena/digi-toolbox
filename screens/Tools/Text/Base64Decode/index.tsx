import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { decodeBase64 } from "./utils";

const Base64DecodePage: FunctionComponent = () => {
  return (
    <Page
      heading="Base64 Decode"
      subHeading="Quickly decode base64-encoded text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/base64-encode"
      convertFunc={decodeBase64}
    />
  );
};

export default Base64DecodePage;
