"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_HTML } from "../samples";
import { encodeHTML } from "./lib";

export default function HTMLEncode() {
  return (
    <TransformTool
      transform={encodeHTML}
      input={{ label: "Text", sample: SAMPLE_HTML }}
      output={{
        label: "HTML entities",
        extension: "txt",
        mimeType: "text/plain"
      }}
    />
  );
}
