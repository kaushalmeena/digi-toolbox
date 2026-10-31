"use client";

import { useMemo, useState } from "react";

import { OptionSelect } from "@/components/tool/option-select";
import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { Input } from "@/components/ui/input";
import { usePersistedInput } from "@/hooks/use-persisted-input";

import { convertBase } from "./lib";

const NAMED_BASES: Record<number, string> = {
  2: "Binary",
  8: "Octal",
  10: "Decimal",
  16: "Hexadecimal",
  32: "Base 32",
  36: "Base 36"
};

const BASES = Array.from({ length: 35 }, (_, index) => index + 2);
const BASE_OPTIONS = BASES.map((base) => ({
  value: String(base),
  label: NAMED_BASES[base] ? `${NAMED_BASES[base]} (${base})` : `Base ${base}`
}));

export default function BaseConverter() {
  const { input, setInput } = usePersistedInput();
  const [fromBase, setFromBase] = useState("10");
  const [showAll, setShowAll] = useState(false);

  const { results, error } = useMemo(() => {
    if (!input.trim()) {
      return { results: new Map<number, string>(), error: null };
    }
    try {
      return {
        results: new Map(
          BASES.map((base) => [
            base,
            convertBase(input, Number(fromBase), base)
          ])
        ),
        error: null
      };
    } catch (err) {
      return {
        results: new Map<number, string>(),
        error: (err as Error).message
      };
    }
  }, [input, fromBase]);

  const visibleBases = showAll
    ? BASES
    : BASES.filter((base) => NAMED_BASES[base] || String(base) === fromBase);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader title="Number" />
        <div className="flex gap-2 p-3 max-sm:flex-col">
          <Input
            aria-label="Number to convert"
            aria-invalid={!!error}
            autoFocus
            placeholder="e.g. 255, ff or 0b1010"
            className="h-10 flex-1 font-mono text-base"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <OptionSelect
            label="Source base"
            size="default"
            className="h-10 w-48 max-sm:w-full"
            value={fromBase}
            options={BASE_OPTIONS}
            onValueChange={setFromBase}
          />
        </div>
        {error && <p className="px-3 pb-3 text-sm text-destructive">{error}</p>}
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader
          title="Conversions"
          actions={
            <button
              type="button"
              className="px-2 text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setShowAll((value) => !value)}
            >
              {showAll ? "Common bases" : "All bases 2–36"}
            </button>
          }
        />
        <PaneBody className="overflow-y-auto">
          <ResultList
            onSelect={(id) => {
              const value = results.get(Number(id));
              setFromBase(id);
              if (value) setInput(value);
            }}
            items={visibleBases.map((base) => ({
              id: String(base),
              label: NAMED_BASES[base] ?? `Base ${base}`,
              hint: `base ${base}`,
              value: results.get(base) ?? "",
              active: String(base) === fromBase
            }))}
          />
        </PaneBody>
      </Pane>
    </div>
  );
}
