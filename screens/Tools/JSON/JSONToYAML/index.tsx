import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertJSONToYAML } from "./utils";

const JSONToYAMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to YAML"
      subHeading="Convert your JSON to YAML data"
      fileExtension="yml"
      fileType="text/yaml"
      convertFunc={convertJSONToYAML}
    />
  );
};

export default JSONToYAMLPage;
