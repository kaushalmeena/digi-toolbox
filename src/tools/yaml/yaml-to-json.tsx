"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_YAML } from "../samples";
import { convertYAMLToJSON } from "./lib";

export default function YAMLToJSON() {
  return (
    <TransformTool
      transform={convertYAMLToJSON}
      input={{ label: "YAML", sample: SAMPLE_YAML }}
      output={{
        label: "JSON",
        extension: "json",
        mimeType: "application/json"
      }}
    />
  );
}
