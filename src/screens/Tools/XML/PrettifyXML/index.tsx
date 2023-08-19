"use client";

import { prettifyXML } from "./utils";
import DataConvertPage from "@/components/DataConvertPage";

export default function PrettifyXMLPage() {
  return (
    <DataConvertPage
      heading="Prettify XML"
      subHeading="Quickly beautify a XML data structure"
      fileExtension="xml"
      fileType="text/xml"
      convertFunction={prettifyXML}
    />
  );
}
