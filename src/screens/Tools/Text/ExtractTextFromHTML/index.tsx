"use client"

import DataConvertPage from "@/components/DataConvertPage";
import { extractTextFromHTML } from "./utils";

export default function ExtractTextFromHTMLPage() {
  return (
    <DataConvertPage
      heading="Extract Text from HTML"
      subHeading="Quickly extract text content from HTML code"
      fileExtension="txt"
      fileType="plain/text"
      convertFunction={extractTextFromHTML}
    />
  );
}