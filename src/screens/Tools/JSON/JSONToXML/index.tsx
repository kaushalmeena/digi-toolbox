import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/DataConvert";
import { convertJSONToXML } from "./utils";

const JSONToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to XML"
      subHeading="Quickly convert a JSON data structure to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-json"
      convertFunction={convertJSONToXML}
    />
  );
};

export default JSONToXMLPage;
