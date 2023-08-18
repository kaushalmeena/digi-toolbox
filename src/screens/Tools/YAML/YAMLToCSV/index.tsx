"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertYAMLToCSV } from "./utils";

export default function YAMLToCSVPage() {
  return (
    <DataConvertPage
      heading="YAML to CSV"
      subHeading="Quickly convert YAML data to CSV data"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-yaml"
      convertFunction={convertYAMLToCSV}
    />
  );
}
