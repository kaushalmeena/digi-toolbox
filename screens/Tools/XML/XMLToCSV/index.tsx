import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertXMLToCSV } from "./utils";

const XMLToCSVPage: FunctionComponent = () => {
  return (
    <Page
      heading="XML to CSV"
      subHeading="Convert your XML to CSV data"
      fileExtension="csv"
      fileType="text/csv"
      convertFunc={convertXMLToCSV}
    />
  );
};

export default XMLToCSVPage;
