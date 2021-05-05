import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertYAMLToCSV } from "./utils";

const YAMLToCSVPage: FunctionComponent = () => {
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
};

export default YAMLToCSVPage;
