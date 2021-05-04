import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { minifyJSON } from "./utils";

const MinifyJSON: FunctionComponent = () => {
  return (
    <Page
      heading="Minify JSON"
      subHeading="Quickly compress a JSON file"
      fileExtension="txt"
      fileType="text/plain"
      convertFunc={minifyJSON}
    />
  );
};

export default MinifyJSON;
