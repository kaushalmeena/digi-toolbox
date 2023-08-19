"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { decodeBase64 } from "./utils";

export default function Base64DecodePage() {
  return (
    <DataConvertPage
      heading="Base64 Decode"
      subHeading="Quickly decode base64-encoded text"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/base64-encode"
      convertFunction={decodeBase64}
    />
  );
}
