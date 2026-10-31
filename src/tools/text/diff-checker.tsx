"use client";

import type { Change } from "diff";
import { useDeferredValue, useMemo, useState } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { OptionSelect } from "@/components/tool/option-select";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { InputActions } from "@/components/tool/tool-actions";
import { cn } from "@/lib/utils";

import { type DiffMode, diffSides } from "./lib";

const MODE_OPTIONS = [
  { value: "lines", label: "Lines" },
  { value: "words", label: "Words" },
  { value: "chars", label: "Characters" }
] as const;

function DiffView({
  changes,
  side
}: {
  changes: Change[];
  side: "left" | "right";
}) {
  return (
    <pre className="min-h-0 flex-1 scrollbar-thin overflow-auto p-3 font-mono text-[13px] leading-5 whitespace-pre-wrap">
      {changes.map((change, index) => (
        <span
          // The diff is recomputed wholesale, so position is the identity.
          // oxlint-disable-next-line react/no-array-index-key
          key={index}
          className={cn(
            change.added && "rounded-[2px] bg-diff-added",
            change.removed && "rounded-[2px] bg-diff-removed",
            side === "left" &&
              change.removed &&
              "line-through decoration-destructive/40"
          )}
        >
          {change.value}
        </span>
      ))}
    </pre>
  );
}

export default function DiffChecker() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [mode, setMode] = useState<DiffMode>("lines");
  const deferredOriginal = useDeferredValue(original);
  const deferredModified = useDeferredValue(modified);
  const diff = useMemo(
    () => diffSides(deferredOriginal, deferredModified, mode),
    [deferredOriginal, deferredModified, mode]
  );
  const hasDiff = original !== "" || modified !== "";

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
        <Pane>
          <PaneHeader
            title="Original"
            actions={<InputActions value={original} onChange={setOriginal} />}
          />
          <PaneBody>
            <CodeEditor
              label="Original text"
              value={original}
              onChange={setOriginal}
              autoFocus
            />
          </PaneBody>
        </Pane>
        <Pane>
          <PaneHeader
            title="Modified"
            actions={<InputActions value={modified} onChange={setModified} />}
          />
          <PaneBody>
            <CodeEditor
              label="Modified text"
              value={modified}
              onChange={setModified}
            />
          </PaneBody>
        </Pane>
      </div>
      {hasDiff && (
        <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
          <Pane>
            <PaneHeader title="Removed" />
            <DiffView changes={diff.left} side="left" />
            <PaneFooter>
              <span className="text-destructive">
                −{diff.removals} removals
              </span>
            </PaneFooter>
          </Pane>
          <Pane>
            <PaneHeader
              title="Added"
              actions={
                <OptionSelect
                  label="Compare by"
                  value={mode}
                  options={MODE_OPTIONS}
                  onValueChange={setMode}
                  className="h-7"
                />
              }
            />
            <DiffView changes={diff.right} side="right" />
            <PaneFooter>
              <span className="text-success">+{diff.additions} additions</span>
            </PaneFooter>
          </Pane>
        </div>
      )}
    </div>
  );
}
