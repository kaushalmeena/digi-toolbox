import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCSVToXML } from "./utils";

const CSVToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="CSV to XML"
      subHeading="Quickly convert a CSV file to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      convertFunc={convertCSVToXML}
    />
  );
};

export default CSVToXMLPage;
