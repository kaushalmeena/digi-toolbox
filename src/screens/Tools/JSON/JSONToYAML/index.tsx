'use client';

import DataConvertPage from "@/components/DataConvertPage";
import { convertJSONToYAML } from "./utils";

export default function JSONToYAMLPage() {
  return (
    <DataConvertPage
      heading="JSON to YAML"
      subHeading="Quickly convert a JSON data structure to a YAML file"
      fileExtension="yml"
      fileType="text/yaml"
      switchURL="/yaml-to-json"
      convertFunction={convertJSONToYAML}
    />
  );
}