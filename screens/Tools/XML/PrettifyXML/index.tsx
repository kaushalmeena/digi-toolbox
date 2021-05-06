import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { prettifyXML } from "./utils";

const PrettifyXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="Prettify XML"
      subHeading="Quickly beautify a XML data structure"
      fileExtension="xml"
      fileType="text/xml"
      convertFunction={prettifyXML}
    />
  );
};

export default PrettifyXMLPage;
