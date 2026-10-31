"use client";

import { useMemo } from "react";

import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { Input } from "@/components/ui/input";
import { usePersistedInput } from "@/hooks/use-persisted-input";

import { type ColorFormat, formatColor, parseColor } from "./lib";

const FORMATS: { id: ColorFormat; label: string; hint: string }[] = [
  { id: "hex", label: "HEX", hint: "#rrggbb" },
  { id: "rgb", label: "RGB", hint: "rgb(r, g, b)" },
  { id: "hsl", label: "HSL", hint: "hsl(h, s%, l%)" }
];

export default function ColorConverter() {
  const { input, setInput } = usePersistedInput();

  const { color, error } = useMemo(() => {
    if (!input.trim()) {
      return { color: null, error: null };
    }
    try {
      return { color: parseColor(input), error: null };
    } catch (err) {
      return { color: null, error: (err as Error).message };
    }
  }, [input]);

  const hex = color ? formatColor(color, "hex") : null;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader title="Color" />
        <div className="flex items-center gap-3 p-3">
          <label
            className="relative size-10 shrink-0 cursor-pointer overflow-hidden rounded-lg border shadow-xs"
            style={{ background: hex ?? "transparent" }}
          >
            <span className="sr-only">Pick a color</span>
            <input
              type="color"
              className="absolute inset-0 cursor-pointer opacity-0"
              value={hex ?? "#000000"}
              onChange={(event) => setInput(event.target.value)}
            />
          </label>
          <Input
            aria-label="Color value"
            aria-invalid={!!error}
            autoFocus
            placeholder="#6366f1, rgb(99, 102, 241) or hsl(239, 84%, 67%)"
            className="h-10 flex-1 font-mono text-base"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
        {error && <p className="px-3 pb-3 text-sm text-destructive">{error}</p>}
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader title="Formats" />
        <PaneBody>
          <ResultList
            items={FORMATS.map((format) => ({
              id: format.id,
              label: format.label,
              hint: format.hint,
              value: color ? formatColor(color, format.id) : ""
            }))}
          />
        </PaneBody>
      </Pane>
      {hex && (
        <div
          className="h-24 rounded-lg border shadow-xs"
          style={{ background: hex }}
          aria-hidden
        />
      )}
    </div>
  );
}
