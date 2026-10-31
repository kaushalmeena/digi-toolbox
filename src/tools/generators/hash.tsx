"use client";

import { useEffect, useState } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { InputActions } from "@/components/tool/tool-actions";
import { usePersistedInput } from "@/hooks/use-persisted-input";
import { formatBytes, utf8ByteLength } from "@/lib/format";

import { generateHash, HASH_ALGORITHMS, type HashAlgorithm } from "./lib";

type Digests = Partial<Record<HashAlgorithm, string>>;

export default function HashGenerator() {
  const { input, setInput, buildShareUrl } = usePersistedInput();
  // Tagged with the input they were computed from, so a stale result for a
  // previous input is never shown while the next digest is in flight.
  const [result, setResult] = useState<{ input: string; digests: Digests }>({
    input: "",
    digests: {}
  });
  const digests = result.input === input ? result.digests : {};

  useEffect(() => {
    let current = true;
    if (!input) {
      return;
    }
    Promise.all(
      HASH_ALGORITHMS.map(
        async (algorithm) =>
          [algorithm, await generateHash(input, algorithm)] as const
      )
    ).then((entries) => {
      if (current) {
        setResult({ input, digests: Object.fromEntries(entries) });
      }
    });
    return () => {
      current = false;
    };
  }, [input]);

  return (
    <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
      <Pane>
        <PaneHeader
          title="Input"
          actions={
            <InputActions
              value={input}
              onChange={setInput}
              buildShareUrl={buildShareUrl}
            />
          }
        />
        <PaneBody>
          <CodeEditor
            label="Text to hash"
            value={input}
            onChange={setInput}
            placeholder="Type, paste or drop a file to hash…"
            autoFocus
          />
        </PaneBody>
        <PaneFooter>
          <span>{input.length.toLocaleString()} chars</span>
          <span>{formatBytes(utf8ByteLength(input))}</span>
        </PaneFooter>
      </Pane>
      <Pane className="md:self-start">
        <PaneHeader title="Digests" />
        <ResultList
          items={HASH_ALGORITHMS.map((algorithm) => ({
            id: algorithm,
            label: algorithm,
            hint: "hex",
            value: digests[algorithm] ?? ""
          }))}
        />
      </Pane>
    </div>
  );
}
