import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeText } from "./utils";

const EncodeTextPage: FunctionComponent = () => {
  return (
    <Page
      heading="Encode Text"
      subHeading="Encode to Text-encoded format"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeText}
    />
  );
};

export default EncodeTextPage;
