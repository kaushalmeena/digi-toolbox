"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertXMLToYAML } from "./utils";

export default function XMLToYAMLPage() {
  return (
    <DataConvertPage
      heading="XML to YAML"
      subHeading="Quickly convert an XML data structure to YAML markup"
      fileExtension="yaml"
      fileType="text/yaml"
      switchURL="/yaml-to-xml"
      convertFunction={convertXMLToYAML}
    />
  );
}
