"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { usePersistedInput } from "@/hooks/use-persisted-input";
import { convertToAll, type Unit } from "@/lib/units";

import { OptionSelect } from "./option-select";
import { Pane, PaneBody, PaneHeader } from "./pane";
import { ResultList } from "./result-list";

/**
 * Converts one value into every unit of a dimension at once. Clicking a unit
 * in the results makes it the new source, carrying its value across.
 */
export function UnitConverter({
  units,
  defaultUnit
}: {
  units: readonly Unit[];
  defaultUnit: string;
}) {
  const { input, setInput } = usePersistedInput();
  const [fromId, setFromId] = useState(defaultUnit);
  const from = units.find((unit) => unit.id === fromId) ?? units[0];
  const results = useMemo(
    () => convertToAll(input, from, units),
    [input, from, units]
  );
  const invalid = input.trim() !== "" && Number.isNaN(Number.parseFloat(input));

  const promote = (unitId: string) => {
    const value = results.get(unitId);
    setFromId(unitId);
    if (value) {
      setInput(value);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader title="Value" />
        <div className="flex gap-2 p-3 max-sm:flex-col">
          <Input
            aria-label="Value to convert"
            aria-invalid={invalid}
            inputMode="decimal"
            autoFocus
            placeholder="Enter a number"
            className="h-10 flex-1 font-mono text-base"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <OptionSelect
            label="Source unit"
            size="default"
            className="h-10 w-56 max-sm:w-full"
            value={from.id}
            options={units.map((unit) => ({
              value: unit.id,
              label: `${unit.label} (${unit.symbol})`
            }))}
            onValueChange={setFromId}
          />
        </div>
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader title="Conversions" />
        <PaneBody>
          <ResultList
            onSelect={promote}
            items={units.map((unit) => ({
              id: unit.id,
              label: unit.label,
              hint: unit.symbol,
              value: results.get(unit.id) ?? "",
              active: unit.id === from.id
            }))}
          />
        </PaneBody>
      </Pane>
    </div>
  );
}
