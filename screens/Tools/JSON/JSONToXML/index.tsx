import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertJSONToXML } from "./utils";

const JSONToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to XML"
      subHeading="Convert your JSON to XML data"
      fileExtension="xml"
      fileType="text/xml"
      convertFunc={convertJSONToXML}
    />
  );
};

export default JSONToXMLPage;
