"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_YAML } from "../samples";
import { convertYAMLToXML } from "./lib";

export default function YAMLToXML() {
  return (
    <TransformTool
      transform={convertYAMLToXML}
      input={{ label: "YAML", sample: SAMPLE_YAML }}
      output={{ label: "XML", extension: "xml", mimeType: "application/xml" }}
    />
  );
}
