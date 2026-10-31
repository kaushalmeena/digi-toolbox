"use client";

import { type ChangeEvent, useMemo } from "react";

import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { InputActions } from "@/components/tool/tool-actions";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { usePersistedInput } from "@/hooks/use-persisted-input";

import { parseURL } from "./lib";

export default function URLParser() {
  const { input, setInput, buildShareUrl } = usePersistedInput();

  const { result, error } = useMemo(() => {
    if (!input.trim()) {
      return { result: null, error: null };
    }
    try {
      return { result: parseURL(input), error: null };
    } catch (err) {
      return { result: null, error: (err as Error).message };
    }
  }, [input]);

  const params = result?.params ?? [];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader
          title="URL"
          actions={
            <InputActions
              value={input}
              onChange={setInput}
              buildShareUrl={buildShareUrl}
            />
          }
        />
        <div className="p-3">
          <Input
            aria-label="URL to parse"
            aria-invalid={!!error}
            autoFocus
            spellCheck={false}
            placeholder="https://user@example.com:8080/docs/page?lang=en&tab=api#intro"
            className="h-10 font-mono text-base"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        {error && <p className="px-3 pb-3 text-sm text-destructive">{error}</p>}
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader title="Parts" />
        <PaneBody>
          <ResultList
            items={(result?.parts ?? []).map((part) => ({
              id: part.label,
              label: part.label,
              value: part.value
            }))}
            emptyText="Enter a URL to see its parts."
          />
        </PaneBody>
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader
          title="Query parameters"
          badge={
            params.length > 0 && (
              <Badge variant="secondary" className="font-mono">
                {params.length}
              </Badge>
            )
          }
        />
        <PaneBody>
          <ResultList
            items={params.map((param, index) => ({
              id: `${index}:${param.key}`,
              label: param.key || "(empty key)",
              value: param.value
            }))}
            emptyText={
              result
                ? "This URL has no query parameters."
                : "Nothing to show yet."
            }
          />
        </PaneBody>
      </Pane>
    </div>
  );
}
