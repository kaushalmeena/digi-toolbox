"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_TEXT } from "../samples";
import { convertTextToHex } from "./lib";

export default function TextToHex() {
  return (
    <TransformTool
      transform={convertTextToHex}
      input={{ label: "Text", sample: SAMPLE_TEXT }}
      output={{ label: "Hex", extension: "txt", mimeType: "text/plain" }}
    />
  );
}
