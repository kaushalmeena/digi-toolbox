import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertYAMLToXML } from "./utils";

const YAMLToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="YAML to XML"
      subHeading="Quickly convert a YAML document to an XML document"
      fileExtension="XML"
      fileType="text/xml"
      switchURL="/xml-to-yaml"
      convertFunction={convertYAMLToXML}
    />
  );
};

export default YAMLToXMLPage;
