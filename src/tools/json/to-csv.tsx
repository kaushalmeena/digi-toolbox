"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JSON } from "../samples";
import { convertJSONToCSV } from "./lib";

export default function JSONToCSV() {
  return (
    <TransformTool
      transform={convertJSONToCSV}
      input={{ label: "JSON", sample: SAMPLE_JSON }}
      output={{ label: "CSV", extension: "csv", mimeType: "text/csv" }}
    />
  );
}
