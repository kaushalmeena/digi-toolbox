import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertXMLToCSV } from "./utils";

function XMLToCSVPage() {
  return (
    <Page
      heading="XML to CSV"
      subHeading="Quickly convert an XML document to a CSV document"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-xml"
      convertFunction={convertXMLToCSV}
    />
  );
}

export default XMLToCSVPage;
