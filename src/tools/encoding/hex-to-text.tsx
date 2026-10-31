"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { convertHexToText } from "./lib";

export default function HexToText() {
  return (
    <TransformTool
      transform={convertHexToText}
      input={{ label: "Hex" }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
