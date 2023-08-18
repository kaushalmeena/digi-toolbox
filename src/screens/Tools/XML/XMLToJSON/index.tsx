"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertXMLToJSON } from "./utils";

export default function XMLToJSONPage() {
  return (
    <DataConvertPage
      heading="XML to JSON"
      subHeading="Quickly convert an XML document to a JSON document"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-xml"
      convertFunction={convertXMLToJSON}
    />
  );
}
