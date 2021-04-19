import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { decodeURL } from "../utils";

const DecodeURL: FunctionComponent = () => {
  return (
    <Page
      heading="Decode URL"
      subHeading="Decode from URL-encoded format"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeURL}
    />
  );
};

export default DecodeURL;
