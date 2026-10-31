"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { decodeBase64 } from "./lib";

export default function Base64Decode() {
  return (
    <TransformTool
      transform={decodeBase64}
      input={{ label: "Base64" }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
