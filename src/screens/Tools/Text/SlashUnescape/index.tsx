"use client"

import DataConvertPage from "@/components/DataConvertPage";
import { unescapeSlash } from "./utils";

export default function SlashUnescapePage() {
  return (
    <DataConvertPage
      heading="Slash Unescape"
      subHeading="Quickly remove slashes from previously slash-escaped text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/slash-escape"
      convertFunction={unescapeSlash}
    />
  );
}
