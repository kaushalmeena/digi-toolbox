import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertJSONToCSV } from "./utils";

const JSONToCSVPage: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to CSV"
      subHeading="Quickly convert a JSON document to a CSV document"
      fileExtension="csv"
      fileType="text/csv"
      switchURL="/csv-to-json"
      convertFunc={convertJSONToCSV}
    />
  );
};

export default JSONToCSVPage;
