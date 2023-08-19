"use client";

import DataConvertPage from "@/components/DataConvertPage";
import { extractTextFromXML } from "./utils";

export default function ExtractTextFromXMLPage() {
  return (
    <DataConvertPage
      heading="Extract Text from XML"
      subHeading="Quickly extract text content from XML code"
      fileExtension="txt"
      fileType="plain/text"
      convertFunction={extractTextFromXML}
    />
  );
}
