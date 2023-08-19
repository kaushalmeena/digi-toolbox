"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { escapeSlash } from "./utils";

export default function SlashEscapePage() {
  return (
    <DataConvertPage
      heading="Slash Escape"
      subHeading="Quickly escape special symbols in text with slashes"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/slash-unescape"
      convertFunction={escapeSlash}
    />
  );
}
