"use client";

import { ArrowLeftRight, CircleAlert, CircleCheck } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useDeferredValue, useMemo } from "react";

import { Badge } from "@/components/ui/badge";
import {
  seedPersistedInput,
  usePersistedInput
} from "@/hooks/use-persisted-input";
import { formatBytes, utf8ByteLength } from "@/lib/format";
import { getTool, toolHref } from "@/tools/registry";

import { CodeEditor } from "./code-editor";
import { IconButton } from "./icon-button";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "./pane";
import { InputActions, OutputActions } from "./tool-actions";

type Result = { output: string; error: string | null };

function runTransform(
  input: string,
  transform: (input: string) => string
): Result {
  if (!input) {
    return { output: "", error: null };
  }
  try {
    return { output: transform(input), error: null };
  } catch (error) {
    return {
      output: "",
      error: error instanceof Error ? error.message : "Invalid input"
    };
  }
}

function TextStats({ text }: { text: string }) {
  const lines = text ? text.split("\n").length : 0;
  return (
    <>
      <span>{lines.toLocaleString()} lines</span>
      <span>{text.length.toLocaleString()} chars</span>
      <span>{formatBytes(utf8ByteLength(text))}</span>
    </>
  );
}

/**
 * The input → output workbench used by every text conversion tool.
 *
 * Callers supply only a pure `transform` (which may throw to report invalid
 * input) and labels; this module owns persistence across reloads, share links,
 * paste/open/sample/clear, copy/download, live validation status and the
 * "swap direction" hand-off to the tool's inverse, which carries the current
 * output over as the inverse tool's input.
 */
export function TransformTool({
  transform,
  input: inputConfig,
  output: outputConfig,
  options
}: {
  transform: (input: string) => string;
  input: { label: string; sample?: string; placeholder?: string };
  output: { label: string; extension?: string; mimeType?: string };
  /** Controls (e.g. indent size) shown in the output pane's header. */
  options?: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const inverse = getTool(pathname.slice(1))?.inverse;
  const { input, setInput, buildShareUrl } = usePersistedInput();
  // Keeps typing responsive on large documents: the transform re-runs at
  // lower priority than the keystroke that triggered it.
  const deferredInput = useDeferredValue(input);
  const { output, error } = useMemo(
    () => runTransform(deferredInput, transform),
    [deferredInput, transform]
  );

  const swap = () => {
    if (!inverse) {
      return;
    }
    const href = toolHref(inverse);
    if (output) {
      seedPersistedInput(href, output);
    }
    router.push(href);
  };

  return (
    <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
      <Pane>
        <PaneHeader
          title="Input"
          badge={<Badge variant="secondary">{inputConfig.label}</Badge>}
          actions={
            <InputActions
              value={input}
              onChange={setInput}
              sample={inputConfig.sample}
              buildShareUrl={buildShareUrl}
            />
          }
        />
        <PaneBody>
          <CodeEditor
            label={`${inputConfig.label} input`}
            value={input}
            onChange={setInput}
            placeholder={
              inputConfig.placeholder ?? "Paste, type or drop a file here…"
            }
            autoFocus
          />
        </PaneBody>
        <PaneFooter>
          <TextStats text={input} />
        </PaneFooter>
      </Pane>
      <Pane>
        <PaneHeader
          title="Output"
          badge={<Badge variant="secondary">{outputConfig.label}</Badge>}
          actions={
            <>
              {options}
              {inverse && (
                <IconButton
                  label={`Swap to ${getTool(inverse)?.name}`}
                  onClick={swap}
                >
                  <ArrowLeftRight />
                </IconButton>
              )}
              <OutputActions
                value={output}
                filename={
                  outputConfig.extension && `output.${outputConfig.extension}`
                }
                mimeType={outputConfig.mimeType}
              />
            </>
          }
        />
        <AnimatePresence initial={false}>
          {error && (
            <m.div
              key="error"
              role="alert"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="shrink-0 overflow-hidden border-b border-destructive/20 bg-destructive/6"
            >
              <div className="flex items-start gap-2.5 px-3 py-2.5 text-sm text-destructive">
                <CircleAlert className="mt-0.5 size-4 shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium">Couldn't convert this input</p>
                  <p className="mt-0.5 font-mono text-xs wrap-break-word whitespace-pre-wrap opacity-90">
                    {error}
                  </p>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
        <PaneBody>
          <CodeEditor
            label={`${outputConfig.label} output`}
            value={output}
            placeholder={error ? "" : "Output appears here as you type."}
          />
        </PaneBody>
        <PaneFooter>
          {error ? (
            <span className="flex items-center gap-1 text-destructive">
              <CircleAlert className="size-3" /> Invalid input
            </span>
          ) : output ? (
            <span className="flex items-center gap-1 text-success">
              <CircleCheck className="size-3" /> OK
            </span>
          ) : null}
          <TextStats text={output} />
        </PaneFooter>
      </Pane>
    </div>
  );
}
