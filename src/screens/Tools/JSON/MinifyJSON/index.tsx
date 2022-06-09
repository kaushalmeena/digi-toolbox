import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { minifyJSON } from "./utils";

function MinifyJSON() {
  return (
    <Page
      heading="Minify JSON"
      subHeading="Quickly compress a JSON file"
      fileExtension="json"
      fileType="application/json"
      convertFunction={minifyJSON}
    />
  );
}

export default MinifyJSON;
