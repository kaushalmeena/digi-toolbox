"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JSON } from "../samples";
import { convertJSONToYAML } from "./lib";

export default function JSONToYAML() {
  return (
    <TransformTool
      transform={convertJSONToYAML}
      input={{ label: "JSON", sample: SAMPLE_JSON }}
      output={{
        label: "YAML",
        extension: "yaml",
        mimeType: "application/yaml"
      }}
    />
  );
}
