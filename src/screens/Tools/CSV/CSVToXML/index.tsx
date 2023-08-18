import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { convertCSVToXML } from "./utils";

function CSVToXMLPage() {
  return (
    <Page
      heading="CSV to XML"
      subHeading="Quickly convert a CSV file to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-csv"
      convertFunction={convertCSVToXML}
    />
  );
}

export default CSVToXMLPage;
