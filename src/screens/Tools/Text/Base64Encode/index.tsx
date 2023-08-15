"use client"

import DataConvertPage from "@/components/DataConvertPage";
import { encodeBase64 } from "./utils";

export default function Base64EncodePage() {
  return (
    <DataConvertPage
      heading="Base64 Encode"
      subHeading="Quickly encode text to base64"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/base64-decode"
      convertFunction={encodeBase64}
    />
  );
}