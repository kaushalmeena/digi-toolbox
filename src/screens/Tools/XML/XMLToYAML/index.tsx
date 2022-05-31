import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertXMLToYAML } from "./utils";

function XMLToYAMLPage() {
  return (
    <Page
      heading="XML to YAML"
      subHeading="Quickly convert an XML data structure to YAML markup"
      fileExtension="yaml"
      fileType="text/yaml"
      switchURL="/yaml-to-xml"
      convertFunction={convertXMLToYAML}
    />
  );
}

export default XMLToYAMLPage;
