import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { minifyJSON } from "./utils";

const MinifyJSON: FunctionComponent = () => {
  return (
    <Page
      heading="Minify JSON"
      subHeading="Quickly compress a JSON file"
      fileExtension="json"
      fileType="application/json"
      convertFunction={minifyJSON}
    />
  );
};

export default MinifyJSON;
