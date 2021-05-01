import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { changeCase } from "./utils";
import { caseOptions } from "./constants";

const ChangeCasePage: FunctionComponent = () => {
  return (
    <Page
      heading="Change Case"
      subHeading="Quickly switch between various letter cases in text"
      fileExtension="txt"
      fileType="plain/text"
      options={caseOptions}
      convertFunc={changeCase}
    />
  );
};

export default ChangeCasePage;
