import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertJSONToCSV } from "./utils";

function JSONToCSVPage() {
  return (
    <Page
      heading="JSON to CSV"
      subHeading="Quickly convert a JSON document to a CSV document"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-json"
      convertFunction={convertJSONToCSV}
    />
  );
}

export default JSONToCSVPage;
