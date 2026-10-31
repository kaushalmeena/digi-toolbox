"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_XML } from "../samples";
import { extractTextFromXML } from "./lib";

export default function ExtractTextFromXML() {
  return (
    <TransformTool
      transform={extractTextFromXML}
      input={{ label: "XML", sample: SAMPLE_XML }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
