"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { convertXMLToCSV } from "./lib";

export default function XMLToCSV() {
  return (
    <TransformTool
      transform={convertXMLToCSV}
      input={{ label: "XML" }}
      output={{ label: "CSV", extension: "csv", mimeType: "text/csv" }}
    />
  );
}
