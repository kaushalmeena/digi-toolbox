'use client';

import DataConvertPage from "@/components/DataConvertPage";
import { convertCSVToYAML } from "./utils";

export default function CSVToYAMLPage() {
  return (
    <DataConvertPage
      heading="CSV to YAML"
      subHeading="Quickly convert a CSV file to a YAML file"
      fileExtension="yaml"
      fileType="text/yaml"
      switchURL="/yaml-to-csv"
      convertFunction={convertCSVToYAML}
    />
  );
}