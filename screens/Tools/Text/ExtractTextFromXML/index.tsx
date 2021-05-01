import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { extractTextFromXML } from "./utils";

const ExtractTextFromXMLPage: FunctionComponent = () => {
  return (
    <Page
      heading="Extract Text from XML"
      subHeading="Extract Text Values from XML online"
      fileExtension="txt"
      fileType="plain/text"
      convertFunc={extractTextFromXML}
    />
  );
};

export default ExtractTextFromXMLPage;
