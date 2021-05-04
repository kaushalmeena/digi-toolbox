import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertXMLToYAML } from "./utils";

const XMLToYAMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="XML to YAML"
      subHeading="Quickly convert an XML data structure to YAML markup"
      fileExtension="yaml"
      fileType="text/yaml"
      switchURL="/yaml-to-xml"
      convertFunc={convertXMLToYAML}
    />
  );
};

export default XMLToYAMLPage;
