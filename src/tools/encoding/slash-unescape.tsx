"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { unescapeSlash } from "./lib";

export default function SlashUnescape() {
  return (
    <TransformTool
      transform={unescapeSlash}
      input={{ label: "Escaped" }}
      output={{ label: "Text", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
