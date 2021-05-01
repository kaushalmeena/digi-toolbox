import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertJSONToXML } from "./utils";

const JSONToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to XML"
      subHeading="Quickly convert a JSON data structure to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      convertFunc={convertJSONToXML}
    />
  );
};

export default JSONToXMLPage;
