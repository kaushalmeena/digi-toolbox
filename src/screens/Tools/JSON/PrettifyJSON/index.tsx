import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { prettifyJSON } from "./utils";

const PrettifyJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="Prettify JSON"
      subHeading="Quickly beautify a JSON data structure"
      fileExtension="json"
      fileType="application/json"
      convertFunction={prettifyJSON}
    />
  );
};

export default PrettifyJSONPage;
