import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCase } from "./utils";
import { caseOptions } from "./constants";

const CaseConverterPage: FunctionComponent = () => {
  return (
    <Page
      heading="Convert Converter"
      subHeading="Quickly switch between various letter cases in text"
      fileExtension="txt"
      fileType="plain/text"
      options={caseOptions}
      convertFunc={convertCase}
    />
  );
};

export default CaseConverterPage;
