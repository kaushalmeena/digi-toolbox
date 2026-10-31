"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_XML } from "../samples";
import { convertXMLToYAML } from "./lib";

export default function XMLToYAML() {
  return (
    <TransformTool
      transform={convertXMLToYAML}
      input={{ label: "XML", sample: SAMPLE_XML }}
      output={{
        label: "YAML",
        extension: "yaml",
        mimeType: "application/yaml"
      }}
    />
  );
}
