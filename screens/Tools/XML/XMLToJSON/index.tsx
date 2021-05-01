import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertXMLToJSON } from "./utils";

const XMLToJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="XML to JSON"
      subHeading="Convert your XML to JSON data"
      fileExtension="json"
      fileType="text/json"
      convertFunc={convertXMLToJSON}
    />
  );
};

export default XMLToJSONPage;
