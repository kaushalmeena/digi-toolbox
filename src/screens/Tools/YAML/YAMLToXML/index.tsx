"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertYAMLToXML } from "./utils";

export default function YAMLToXMLPage() {
  return (
    <DataConvertPage
      heading="YAML to XML"
      subHeading="Quickly convert a YAML document to an XML document"
      fileExtension="XML"
      fileType="text/xml"
      switchURL="/xml-to-yaml"
      convertFunction={convertYAMLToXML}
    />
  );
}
