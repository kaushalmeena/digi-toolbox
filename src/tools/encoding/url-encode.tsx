"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_TEXT } from "../samples";
import { encodeURL } from "./lib";

export default function URLEncode() {
  return (
    <TransformTool
      transform={encodeURL}
      input={{ label: "Text", sample: SAMPLE_TEXT }}
      output={{
        label: "URL-encoded",
        extension: "txt",
        mimeType: "text/plain"
      }}
    />
  );
}
