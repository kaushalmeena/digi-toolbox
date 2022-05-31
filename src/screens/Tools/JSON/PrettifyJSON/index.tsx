import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { prettifyJSON } from "./utils";

function PrettifyJSONPage() {
  return (
    <Page
      heading="Prettify JSON"
      subHeading="Quickly beautify a JSON data structure"
      fileExtension="json"
      fileType="application/json"
      convertFunction={prettifyJSON}
    />
  );
}

export default PrettifyJSONPage;
