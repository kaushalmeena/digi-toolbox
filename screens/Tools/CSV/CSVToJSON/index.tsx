import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCSVToJSON } from "./utils";

const CSVToJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="CSV to JSON"
      subHeading="Convert your CSV to JSON data"
      fileExtension="json"
      fileType="text/json"
      convertFunc={convertCSVToJSON}
    />
  );
};

export default CSVToJSONPage;
