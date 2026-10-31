"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JSON } from "../samples";
import { minifyJSON } from "./lib";

export default function MinifyJSON() {
  return (
    <TransformTool
      transform={minifyJSON}
      input={{ label: "JSON", sample: SAMPLE_JSON }}
      output={{
        label: "JSON",
        extension: "json",
        mimeType: "application/json"
      }}
    />
  );
}
