"use client";

import { useCallback, useState } from "react";

import { OptionSelect } from "@/components/tool/option-select";
import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JSON } from "../samples";
import { type Indent, prettifyJSON } from "./lib";

const INDENT_OPTIONS = [
  { value: "2", label: "2 spaces" },
  { value: "4", label: "4 spaces" },
  { value: "tab", label: "Tabs" }
] as const;

export default function PrettifyJSON() {
  const [indent, setIndent] = useState<Indent>("2");
  const transform = useCallback(
    (input: string) => prettifyJSON(input, indent),
    [indent]
  );

  return (
    <TransformTool
      transform={transform}
      input={{ label: "JSON", sample: SAMPLE_JSON }}
      output={{
        label: "JSON",
        extension: "json",
        mimeType: "application/json"
      }}
      options={
        <OptionSelect
          label="Indentation"
          value={indent}
          options={INDENT_OPTIONS}
          onValueChange={setIndent}
          size="sm"
          className="mr-1"
        />
      }
    />
  );
}
