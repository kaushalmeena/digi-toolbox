import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { convertCase } from "../utils";
import { CASE_OPTIONS } from "../constants";

const CaseConverterPage: FunctionComponent = () => {
  return (
    <Page
      heading="Convert Text Case"
      subHeading="Title/Upper/Lower/Sentence Case Converter Tool"
      fileExtension="txt"
      fileType="plain/text"
      options={CASE_OPTIONS}
      convertFunc={convertCase}
    />
  );
};

export default CaseConverterPage;
