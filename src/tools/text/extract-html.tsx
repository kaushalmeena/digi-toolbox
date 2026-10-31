"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_HTML } from "../samples";
import { extractTextFromHTML } from "./lib";

export default function ExtractTextFromHTML() {
  return (
    <TransformTool
      transform={extractTextFromHTML}
      input={{ label: "HTML", sample: SAMPLE_HTML }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
