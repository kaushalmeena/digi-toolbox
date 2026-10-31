"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_TEXT } from "../samples";
import { escapeSlash } from "./lib";

export default function SlashEscape() {
  return (
    <TransformTool
      transform={escapeSlash}
      input={{ label: "Text", sample: SAMPLE_TEXT }}
      output={{ label: "Escaped", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
