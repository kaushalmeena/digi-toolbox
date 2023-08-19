"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertTextToHex } from "./utils";

export default function TextToHexPage() {
  return (
    <DataConvertPage
      heading="Text to Hex"
      subHeading="Quickly convert plain text to hexadecimal values"
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/hex-to-text"
      convertFunction={convertTextToHex}
    />
  );
}
