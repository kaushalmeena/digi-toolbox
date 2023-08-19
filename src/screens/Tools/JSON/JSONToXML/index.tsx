"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertJSONToXML } from "./utils";

export default function JSONToXMLPage() {
  return (
    <DataConvertPage
      heading="JSON to XML"
      subHeading="Quickly convert a JSON data structure to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-json"
      convertFunction={convertJSONToXML}
    />
  );
}
