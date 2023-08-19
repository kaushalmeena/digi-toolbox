"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { decodeHTML } from "./utils";

export default function HTMLDecodePage() {
  return (
    <DataConvertPage
      heading="HTML Decode"
      subHeading="Quickly convert HTML entities to plain text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/html-encode"
      convertFunction={decodeHTML}
    />
  );
}
