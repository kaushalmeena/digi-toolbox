import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCSVToYAML } from "./utils";

const CSVToYAMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="CSV to YAML"
      subHeading="Quickly convert a CSV file to a YAML file"
      fileExtension="yaml"
      fileType="text/yaml"
      switchURL="/yaml-to-csv"
      convertFunc={convertCSVToYAML}
    />
  );
};

export default CSVToYAMLPage;
