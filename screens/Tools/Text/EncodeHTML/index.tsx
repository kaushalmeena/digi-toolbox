import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { encodeHTML } from "../utils";

const EncodeHTML: FunctionComponent = () => {
  return (
    <Page
      heading="Encode HTML"
      subHeading="Encode HTML to String online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={encodeHTML}
    />
  );
};

export default EncodeHTML;
