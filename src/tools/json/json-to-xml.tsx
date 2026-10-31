"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JSON } from "../samples";
import { convertJSONToXML } from "./lib";

export default function JSONToXML() {
  return (
    <TransformTool
      transform={convertJSONToXML}
      input={{ label: "JSON", sample: SAMPLE_JSON }}
      output={{ label: "XML", extension: "xml", mimeType: "application/xml" }}
    />
  );
}
