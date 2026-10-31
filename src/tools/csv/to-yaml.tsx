"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_CSV } from "../samples";
import { convertCSVToYAML } from "./lib";

export default function CSVToYAML() {
  return (
    <TransformTool
      transform={convertCSVToYAML}
      input={{ label: "CSV", sample: SAMPLE_CSV }}
      output={{
        label: "YAML",
        extension: "yaml",
        mimeType: "application/yaml"
      }}
    />
  );
}
