import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertXMLToYAML } from "./utils";

const XMLToYAMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="XML to YAML"
      subHeading="Quickly convert an XML data structure to YAML markup"
      fileExtension="yaml"
      fileType="text/yaml"
      convertFunc={convertXMLToYAML}
    />
  );
};

export default XMLToYAMLPage;
