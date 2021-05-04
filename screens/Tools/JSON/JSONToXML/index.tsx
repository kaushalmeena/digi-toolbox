import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertJSONToXML } from "./utils";

const JSONToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to XML"
      subHeading="Quickly convert a JSON data structure to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-json"
      convertFunc={convertJSONToXML}
    />
  );
};

export default JSONToXMLPage;
