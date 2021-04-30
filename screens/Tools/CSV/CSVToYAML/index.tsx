import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCSVToYAML } from "./utils";

const CSVToYAMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="CSV to YAML"
      subHeading="Convert your CSV to YAML data"
      fileExtension="yaml"
      fileType="text/yaml"
      convertFunc={convertCSVToYAML}
    />
  );
};

export default CSVToYAMLPage;
