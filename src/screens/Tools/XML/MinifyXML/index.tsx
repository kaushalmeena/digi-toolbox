"use client"

import DataConvertPage from "@/components/DataConvertPage";
import { minifyXML } from "./utils";

export default function MinifyXMLPage() {
  return (
    <DataConvertPage
      heading="Minify XML"
      subHeading="Quickly compress a XML file"
      fileExtension="xml"
      fileType="text/xml"
      convertFunction={minifyXML}
    />
  );
}
