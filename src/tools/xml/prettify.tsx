"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_XML } from "../samples";
import { prettifyXML } from "./lib";

export default function PrettifyXML() {
  return (
    <TransformTool
      transform={prettifyXML}
      input={{ label: "XML", sample: SAMPLE_XML }}
      output={{ label: "XML", extension: "xml", mimeType: "application/xml" }}
    />
  );
}
