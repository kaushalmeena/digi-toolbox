import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { minifyJSON } from "./utils";

const MinifyJSON: FunctionComponent = () => {
  return (
    <Page
      heading="Minify JSON"
      subHeading="Minify JSON to remove whitespace"
      fileExtension="txt"
      fileType="text/plain"
      convertFunc={minifyJSON}
    />
  );
};

export default MinifyJSON;
