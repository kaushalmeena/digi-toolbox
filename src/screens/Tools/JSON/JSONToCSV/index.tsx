"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertJSONToCSV } from "./utils";

export default function JSONToCSVPage() {
  return (
    <DataConvertPage
      heading="JSON to CSV"
      subHeading="Quickly convert a JSON document to a CSV document"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-json"
      convertFunction={convertJSONToCSV}
    />
  );
}
