"use client";

import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JWT } from "../samples";
import { decodeJWT } from "./lib";

export default function JWTDecoder() {
  return (
    <TransformTool
      transform={decodeJWT}
      input={{ label: "JWT", sample: SAMPLE_JWT }}
      output={{
        label: "JSON",
        extension: "json",
        mimeType: "application/json"
      }}
    />
  );
}
