import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { convertYAMLToCSV } from "./utils";

function YAMLToCSVPage() {
  return (
    <Page
      heading="YAML to CSV"
      subHeading="Quickly convert YAML data to CSV data"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-yaml"
      convertFunction={convertYAMLToCSV}
    />
  );
}

export default YAMLToCSVPage;
