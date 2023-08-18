"use client"

import DataConvertPage from "@/components/DataConvertPage";
import { convertYAMLToJSON } from "./utils";

export default function YAMLToJSONPage() {
  return (
    <DataConvertPage
      heading="YAML to JSON"
      subHeading="Quickly convert a YAML config to a JSON config"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-yaml"
      convertFunction={convertYAMLToJSON}
    />
  );
}
