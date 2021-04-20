import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeURL } from "../utils";

const EncodeURLPage: FunctionComponent = () => {
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

export default EncodeURLPage;
