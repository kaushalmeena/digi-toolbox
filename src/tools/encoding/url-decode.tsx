"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { decodeURL } from "./lib";

export default function URLDecode() {
  return (
    <TransformTool
      transform={decodeURL}
      input={{ label: "URL-encoded" }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
