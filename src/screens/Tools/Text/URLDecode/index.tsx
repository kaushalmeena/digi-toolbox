"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { decodeURL } from "./utils";

export default function URLDecodePage() {
  return (
    <DataConvertPage
      heading="URL Decode"
      subHeading="Quickly URL-unescape text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/url-encode"
      convertFunction={decodeURL}
    />
  );
}
