import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertCSVToJSON } from "./utils";

function CSVToJSONPage() {
  return (
    <Page
      heading="CSV to JSON"
      subHeading="Quickly convert a CSV file to a JSON data structure"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-csv"
      convertFunction={convertCSVToJSON}
    />
  );
}

export default CSVToJSONPage;
