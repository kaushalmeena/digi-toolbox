import React from "react";
import Page from "../../../../shared/Pages/DataConvert";
import { convertXMLToJSON } from "./utils";

function XMLToJSONPage() {
  return (
    <Page
      heading="XML to JSON"
      subHeading="Quickly convert an XML document to a JSON document"
      fileExtension="json"
      fileType="text/json"
      switchURL="/json-to-xml"
      convertFunction={convertXMLToJSON}
    />
  );
}

export default XMLToJSONPage;
