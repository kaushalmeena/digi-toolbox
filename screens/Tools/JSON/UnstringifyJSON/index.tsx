import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { unstringifyJSON } from "./utils";

const UnstringifyJSONPage: FunctionComponent = () => {
  return (
    <Page
      heading="Unstringify JSON"
      subHeading="Convert your escaped JSON to JSON"
      fileExtension="txt"
      fileType="text/plain"
      convertFunc={unstringifyJSON}
    />
  );
};

export default UnstringifyJSONPage;
