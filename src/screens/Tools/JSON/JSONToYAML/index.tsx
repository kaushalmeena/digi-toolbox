import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { convertJSONToYAML } from "./utils";

function JSONToYAMLPage() {
  return (
    <Page
      heading="JSON to YAML"
      subHeading="Quickly convert a JSON data structure to a YAML file"
      fileExtension="yml"
      fileType="text/yaml"
      switchURL="/yaml-to-json"
      convertFunction={convertJSONToYAML}
    />
  );
}

export default JSONToYAMLPage;
