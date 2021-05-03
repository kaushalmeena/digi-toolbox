import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/Convert";
import { unescapeSlash } from "./utils";

const SlashUnescapePage: FunctionComponent = () => {
  return (
    <Page
      heading="Slash Unescape"
      subHeading="Quickly remove slashes from previously slash-escaped text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/slash-escape"
      convertFunc={unescapeSlash}
    />
  );
};

export default SlashUnescapePage;
