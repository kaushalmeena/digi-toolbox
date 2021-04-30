import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertJSONToCSV } from "./utils";

const JSONToCSVPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to CSV"
      subHeading="Convert your JSON to CSV data"
      fileExtension="csv"
      fileType="text/csv"
      convertFunc={convertJSONToCSV}
    />
  );
};

export default JSONToCSVPage;
