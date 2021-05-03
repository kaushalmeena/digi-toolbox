import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertYAMLToXML } from "./utils";

const YAMLToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="YAML to XML"
      subHeading="Quickly convert a YAML document to an XML document"
      fileExtension="XML"
      fileType="text/XML"
      convertFunc={convertYAMLToXML}
    />
  );
};

export default YAMLToXMLPage;
