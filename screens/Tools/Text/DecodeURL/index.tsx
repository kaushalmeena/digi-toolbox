import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { decodeURL } from "./utils";

const DecodeURLPage: FunctionComponent = () => {
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

export default DecodeURLPage;
