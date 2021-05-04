import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/DataConvert";
import { prettifyJSON } from "./utils";

const PrettifyJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="Prettify JSON"
      subHeading="Quickly beautify a JSON data structure"
      fileExtension="txt"
      fileType="text/plain"
      convertFunc={prettifyJSON}
    />
  );
};

export default PrettifyJSONPage;
