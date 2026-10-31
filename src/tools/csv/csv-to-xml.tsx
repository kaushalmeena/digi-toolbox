"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_CSV } from "../samples";
import { convertCSVToXML } from "./lib";

export default function CSVToXML() {
  return (
    <TransformTool
      transform={convertCSVToXML}
      input={{ label: "CSV", sample: SAMPLE_CSV }}
      output={{ label: "XML", extension: "xml", mimeType: "application/xml" }}
    />
  );
}
