"use client"

import DataConvertPage from "@/components/DataConvertPage";
import { encodeHTML } from "./utils";

export default function HTMLEncodePage() {
  return (
    <DataConvertPage
      heading="HTML Encode"
      subHeading="Quickly convert all plain text characters to HTML entities"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/html-decode"
      convertFunction={encodeHTML}
    />
  );
}
