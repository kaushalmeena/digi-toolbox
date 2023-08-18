'use client';

import DataConvertPage from "@/components/DataConvertPage";
import { convertCSVToJSON } from "./utils";

export default function CSVToJSONPage() {
  return (
    <DataConvertPage
      heading="CSV to JSON"
      subHeading="Quickly convert a CSV file to a JSON data structure"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-csv"
      convertFunction={convertCSVToJSON}
    />
  );
}