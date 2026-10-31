"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_XML } from "../samples";
import { minifyXML } from "./lib";

export default function MinifyXML() {
  return (
    <TransformTool
      transform={minifyXML}
      input={{ label: "XML", sample: SAMPLE_XML }}
      output={{ label: "XML", extension: "xml", mimeType: "application/xml" }}
    />
  );
}
