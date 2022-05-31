import React from "react";
import Page from "../../../../shared/Page/DataConvert";
import { unescapeSlash } from "./utils";

function SlashUnescapePage() {
  return (
    <Page
      heading="Slash Unescape"
      subHeading="Quickly remove slashes from previously slash-escaped text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/slash-escape"
      convertFunction={unescapeSlash}
    />
  );
}

export default SlashUnescapePage;
