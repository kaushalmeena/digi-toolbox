import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeBase64 } from "../utils";

const EncodeBase64Page: FunctionComponent = () => {
  return (
    <Page
      heading="Encode Base64"
      subHeading="Encode Text to Base64 Converter"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeBase64}
    />
  );
};

export default EncodeBase64Page;
