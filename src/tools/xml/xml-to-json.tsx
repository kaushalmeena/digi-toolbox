"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_XML } from "../samples";
import { convertXMLToJSON } from "./lib";

export default function XMLToJSON() {
  return (
    <TransformTool
      transform={convertXMLToJSON}
      input={{ label: "XML", sample: SAMPLE_XML }}
      output={{
        label: "JSON",
        extension: "json",
        mimeType: "application/json"
      }}
    />
  );
}
