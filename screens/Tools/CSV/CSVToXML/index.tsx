import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { convertCSVToXML } from "./utils";

const CSVToXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="CSV to XML"
      subHeading="Quickly convert a CSV file to an XML file"
      fileExtension="xml"
      fileType="text/xml"
      switchURL="/xml-to-csv"
      convertFunction={convertCSVToXML}
    />
  );
};

export default CSVToXMLPage;
