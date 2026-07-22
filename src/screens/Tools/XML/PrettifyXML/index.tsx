"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { prettifyXML } from "./utils";

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
