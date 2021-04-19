import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { encodeURL } from "../utils";

const EncodeURL: FunctionComponent = () => {
  return (
    <Page
      heading="Encode URL"
      subHeading="Encode to URL-encoded format"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeURL}
    />
  );
};

export default EncodeURL;
