"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { convertHexToText } from "./utils";

export default function HexToTextPage() {
  return (
    <DataConvertPage
      heading="Hex to Text"
      subHeading="Quickly convert hexadecimal to readable text."
      fileExtension="txt"
      fileType="plain/text"
      switchURL="/text-to-hex"
      convertFunction={convertHexToText}
    />
  );
}
