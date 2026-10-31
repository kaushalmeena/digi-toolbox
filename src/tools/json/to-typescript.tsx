"use client";

import { useCallback, useState } from "react";

import { OptionSelect } from "@/components/tool/option-select";
import { TransformTool } from "@/components/tool/transform-tool";

import { SAMPLE_JSON } from "../samples";
import { convertJSONToTypeScript, type TypeScriptOptions } from "./lib";

type Declaration = NonNullable<TypeScriptOptions["declaration"]>;

const DECLARATION_OPTIONS = [
  { value: "interface", label: "interface" },
  { value: "type", label: "type" }
] as const;

export default function JSONToTypeScript() {
  const [declaration, setDeclaration] = useState<Declaration>("interface");
  const transform = useCallback(
    (input: string) => convertJSONToTypeScript(input, { declaration }),
    [declaration]
  );

  return (
    <TransformTool
      transform={transform}
      input={{ label: "JSON", sample: SAMPLE_JSON }}
      output={{
        label: "TypeScript",
        extension: "ts",
        mimeType: "text/typescript"
      }}
      options={
        <OptionSelect
          label="Declaration style"
          value={declaration}
          options={DECLARATION_OPTIONS}
          onValueChange={setDeclaration}
          size="sm"
          className="mr-1 font-mono"
        />
      }
    />
  );
}
