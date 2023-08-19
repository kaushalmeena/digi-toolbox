"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertCSVToXML } from "./utils";

export default function CSVToXMLPage() {
  return (
    <DataConvertPage
      heading="CSV to XML"
      subHeading="Quickly convert a CSV data to an XML data"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-csv"
      convertFunction={convertCSVToXML}
    />
  );
}
