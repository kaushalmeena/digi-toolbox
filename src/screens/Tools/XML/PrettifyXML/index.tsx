import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { prettifyXML } from "./utils";

function PrettifyXMLPage() {
  return (
    <Page
      heading="Prettify XML"
      subHeading="Quickly beautify a XML data structure"
      fileExtension="xml"
      fileType="text/xml"
      convertFunction={prettifyXML}
    />
  );
}

export default PrettifyXMLPage;
