"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_YAML } from "../samples";
import { convertYAMLToCSV } from "./lib";

export default function YAMLToCSV() {
  return (
    <TransformTool
      transform={convertYAMLToCSV}
      input={{ label: "YAML", sample: SAMPLE_YAML }}
      output={{ label: "CSV", extension: "csv", mimeType: "text/csv" }}
    />
  );
}
