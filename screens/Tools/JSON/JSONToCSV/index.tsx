import React, { FunctionComponent } from "react";
import Page from "../../../common/ConvertPage";
import { convertJSONToCSV } from "../utils";

const JSONToCSV: FunctionComponent = () => {
  return (
    <Page
      heading="JSON to CSV"
      subHeading="Convert your JSON to CSV formatted data"
      fileExtension="csv"
      fileType="text/csv"
      convertFunc={convertJSONToCSV}
    />
  );
};

export default JSONToCSV;
