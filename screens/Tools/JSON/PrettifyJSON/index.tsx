import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { prettifyJSON } from "./utils";

const PrettifyJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="Prettify JSON"
      subHeading="Format JSON to look pretty"
      fileExtension="txt"
      fileType="text/plain"
      convertFunc={prettifyJSON}
    />
  );
};

export default PrettifyJSONPage;
