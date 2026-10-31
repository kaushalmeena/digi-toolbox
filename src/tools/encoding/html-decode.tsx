"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { decodeHTML } from "./lib";

export default function HTMLDecode() {
  return (
    <TransformTool
      transform={decodeHTML}
      input={{ label: "HTML entities" }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
