"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { encodeURL } from "./utils";

export default function URLEncodePage() {
  return (
    <DataConvertPage
      heading="URL Encode"
      subHeading="Quickly URL-escape text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/url-decode"
      convertFunction={encodeURL}
    />
  );
}
