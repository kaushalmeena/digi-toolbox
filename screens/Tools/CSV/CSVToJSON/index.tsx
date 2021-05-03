import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCSVToJSON } from "./utils";

const CSVToJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="CSV to JSON"
      subHeading="Quickly convert a CSV file to a JSON data structure"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-csv"
      convertFunc={convertCSVToJSON}
    />
  );
};

export default CSVToJSONPage;
