import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { minifyXML } from "./utils";

function MinifyXML() {
  return (
    <Page
      heading="Minify XML"
      subHeading="Quickly compress a XML file"
      fileExtension="xml"
      fileType="text/xml"
      convertFunction={minifyXML}
    />
  );
}

export default MinifyXML;
