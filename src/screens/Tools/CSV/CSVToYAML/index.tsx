import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertCSVToYAML } from "./utils";

function CSVToYAMLPage() {
  return (
    <Page
      heading="CSV to YAML"
      subHeading="Quickly convert a CSV file to a YAML file"
      fileExtension="yaml"
      fileType="text/yaml"
      switchURL="/yaml-to-csv"
      convertFunction={convertCSVToYAML}
    />
  );
}

export default CSVToYAMLPage;
