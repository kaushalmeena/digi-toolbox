"use client";

import { useDeferredValue, useMemo } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { InputActions } from "@/components/tool/tool-actions";
import { usePersistedInput } from "@/hooks/use-persisted-input";
import { formatBytes } from "@/lib/format";

import { analyzeText, formatDuration } from "./lib";

const SAMPLE = `Digi-Toolbox is a collection of small developer tools that run entirely in your browser. Nothing you paste here leaves your device.

Paste an article, an essay or a commit message to see how long it is. The statistics update as you type, and the most frequent words show what the text is really about.`;

const number = (value: number) => value.toLocaleString();

function StatTile({
  label,
  value,
  hint
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-1 rounded-md border bg-muted/30 px-3 py-2.5">
      <dt className="truncate text-xs text-muted-foreground">{label}</dt>
      <dd className="truncate text-2xl font-semibold tracking-tight tabular-nums">
        {value}
      </dd>
      {hint && (
        <dd className="-mt-1 truncate font-mono text-[11px] text-muted-foreground">
          {hint}
        </dd>
      )}
    </div>
  );
}

export default function TextStatistics() {
  const { input, setInput, buildShareUrl } = usePersistedInput();
  const deferredInput = useDeferredValue(input);
  const stats = useMemo(() => analyzeText(deferredInput), [deferredInput]);
  const topCount = stats.topWords[0]?.count ?? 0;

  const tiles = [
    { label: "Characters", value: number(stats.characters) },
    {
      label: "Without spaces",
      value: number(stats.charactersExcludingSpaces)
    },
    { label: "Words", value: number(stats.words) },
    { label: "Unique words", value: number(stats.uniqueWords) },
    { label: "Sentences", value: number(stats.sentences) },
    { label: "Paragraphs", value: number(stats.paragraphs) },
    { label: "Lines", value: number(stats.lines) },
    { label: "Non-empty lines", value: number(stats.nonEmptyLines) },
    {
      label: "UTF-8 bytes",
      value: number(stats.bytes),
      hint: formatBytes(stats.bytes)
    },
    {
      label: "Avg. word length",
      value: stats.averageWordLength.toFixed(1),
      hint: "characters"
    },
    {
      label: "Reading time",
      value: formatDuration(stats.readingTime),
      hint: "at 238 wpm"
    },
    {
      label: "Speaking time",
      value: formatDuration(stats.speakingTime),
      hint: "at 130 wpm"
    }
  ];

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
            label="Text to analyze"
            value={input}
            onChange={setInput}
            placeholder="Type, paste or drop a file to analyze…"
            autoFocus
          />
        </PaneBody>
      </Pane>
      <Pane>
        <PaneHeader title="Statistics" />
        <PaneBody className="scrollbar-thin overflow-auto">
          <dl className="grid grid-cols-2 gap-2 p-3 lg:grid-cols-3">
            {tiles.map((tile) => (
              <StatTile key={tile.label} {...tile} />
            ))}
          </dl>
          <section className="border-t px-3 pt-3 pb-4">
            <h3 className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Top words
            </h3>
            {stats.topWords.length === 0 ? (
              <p className="py-4 text-center text-sm text-muted-foreground">
                Frequent words appear here as you type.
              </p>
            ) : (
              <ol className="flex flex-col gap-1">
                {stats.topWords.map(({ word, count }, index) => (
                  <li
                    key={word}
                    className="relative flex h-7 items-center gap-3 overflow-hidden rounded-md px-2 text-sm"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 rounded-md bg-primary/10"
                      style={{ width: `${(count / topCount) * 100}%` }}
                    />
                    <span className="relative w-5 shrink-0 text-right font-mono text-xs text-muted-foreground tabular-nums">
                      {index + 1}
                    </span>
                    <span className="relative min-w-0 flex-1 truncate">
                      {word}
                    </span>
                    <span className="relative font-mono text-xs tabular-nums">
                      {count.toLocaleString()}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </section>
        </PaneBody>
      </Pane>
    </div>
  );
}
