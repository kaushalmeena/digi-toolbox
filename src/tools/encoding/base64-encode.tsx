"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_TEXT } from "../samples";
import { encodeBase64 } from "./lib";

export default function Base64Encode() {
  return (
    <TransformTool
      transform={encodeBase64}
      input={{ label: "Text", sample: SAMPLE_TEXT }}
      output={{ label: "Base64", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
