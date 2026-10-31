"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_CSV } from "../samples";
import { convertCSVToJSON } from "./lib";

export default function CSVToJSON() {
  return (
    <TransformTool
      transform={convertCSVToJSON}
      input={{ label: "CSV", sample: SAMPLE_CSV }}
      output={{
        label: "JSON",
        extension: "json",
        mimeType: "application/json"
      }}
    />
  );
}
