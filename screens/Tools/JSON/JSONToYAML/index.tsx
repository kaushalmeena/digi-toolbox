import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertJSONToYAML } from "./utils";

const JSONToYAMLPage: FunctionComponent = () => {
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
};

export default JSONToYAMLPage;
