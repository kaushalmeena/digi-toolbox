import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertYAMLToJSON } from "./utils";

function YAMLToJSONPage() {
  return (
    <Page
      heading="YAML to JSON"
      subHeading="Quickly convert a YAML config to a JSON config"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-yaml"
      convertFunction={convertYAMLToJSON}
    />
  );
}

export default YAMLToJSONPage;
