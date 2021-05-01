import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertXMLToYAML } from "./utils";

const XMLToYAMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="XML to YAML"
      subHeading="Convert your XML to YAML data"
      fileExtension="yaml"
      fileType="text/yaml"
      convertFunc={convertXMLToYAML}
    />
  );
};

export default XMLToYAMLPage;
