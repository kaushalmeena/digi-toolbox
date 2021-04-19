import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { decodeHTML } from "../utils";

const DecodeHTML: FunctionComponent = () => {
  return (
    <Page
      heading="Decode HTML"
      subHeading="Decode HTML to String online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={decodeHTML}
    />
  );
};

export default DecodeHTML;
