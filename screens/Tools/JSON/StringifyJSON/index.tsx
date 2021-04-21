import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { stringifyJSON } from "./utils";

const StringifyJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="Stringify JSON"
      subHeading="Convert your JSON to escaped JSON"
      fileExtension="txt"
      fileType="text/plain"
      convertFunc={stringifyJSON}
    />
  );
};

export default StringifyJSONPage;
