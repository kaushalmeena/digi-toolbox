import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { encodeURL } from "./utils";

const URLEncodePage: FunctionComponent = () => {
  return (
    <Page
      heading="URL Encode"
      subHeading="Quickly URL-escape text"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeURL}
    />
  );
};

export default URLEncodePage;
