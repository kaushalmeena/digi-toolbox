"use client";

import { useDeferredValue, useMemo } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { InputActions } from "@/components/tool/tool-actions";
import { usePersistedInput } from "@/hooks/use-persisted-input";

import { CASE_STYLES, convertCase, splitWords } from "./lib";

const SAMPLE = "XMLHttpRequest user_first_name";

export default function CaseConverter() {
  const { input, setInput, buildShareUrl } = usePersistedInput();
  const deferredInput = useDeferredValue(input);
  const items = useMemo(
    () =>
      CASE_STYLES.map((style) => ({
        id: style.id,
        label: style.label,
        value: deferredInput ? convertCase(deferredInput, style.id) : ""
      })),
    [deferredInput]
  );
  const words = useMemo(
    () => splitWords(deferredInput).length,
    [deferredInput]
  );

  return (
    <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
      <Pane>
        <PaneHeader
          title="Input"
          actions={
            <InputActions
              value={input}
              onChange={setInput}
              sample={SAMPLE}
              buildShareUrl={buildShareUrl}
            />
          }
        />
        <PaneBody>
          <CodeEditor
            label="Text to convert"
            value={input}
            onChange={setInput}
            placeholder="Type or paste identifiers or text — each line is converted separately…"
            autoFocus
          />
        </PaneBody>
        <PaneFooter>
          <span>{words.toLocaleString()} words</span>
          <span>{input.length.toLocaleString()} chars</span>
        </PaneFooter>
      </Pane>
      <Pane>
        <PaneHeader title="Cases" />
        <PaneBody className="scrollbar-thin overflow-auto">
          <ResultList items={items} />
        </PaneBody>
      </Pane>
    </div>
  );
}
