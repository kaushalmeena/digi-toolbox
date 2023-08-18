"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertXMLToCSV } from "./utils";

export default function XMLToCSVPage() {
  return (
    <DataConvertPage
      heading="XML to CSV"
      subHeading="Quickly convert an XML document to a CSV document"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-xml"
      convertFunction={convertXMLToCSV}
    />
  );
}
