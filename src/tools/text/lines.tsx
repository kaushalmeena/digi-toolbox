"use client";

import { SlidersHorizontal } from "lucide-react";
import { useCallback, useDeferredValue, useMemo, useState } from "react";

import { OptionSelect } from "@/components/tool/option-select";
import { TransformTool } from "@/components/tool/transform-tool";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { usePersistedInput } from "@/hooks/use-persisted-input";

import {
  countLines,
  DEFAULT_LINE_OPTIONS,
  type LineOptions,
  type LineSort,
  processLines
} from "./lib";

const SORT_OPTIONS = [
  { value: "none", label: "Keep order" },
  { value: "asc", label: "A → Z" },
  { value: "desc", label: "Z → A" },
  { value: "natural", label: "Natural (1, 2, 10)" },
  { value: "length", label: "By length" }
] as const satisfies readonly { value: LineSort; label: string }[];

type Toggle = Exclude<keyof LineOptions, "sort">;

const TOGGLES: { key: Toggle; label: string }[] = [
  { key: "unique", label: "Remove duplicates" },
  { key: "caseInsensitive", label: "Ignore case" },
  { key: "trim", label: "Trim whitespace" },
  { key: "removeEmpty", label: "Remove empty lines" },
  { key: "reverse", label: "Reverse order" }
];

const SAMPLE_LINES = `banana
apple
Cherry
  apple
file10.txt
file2.txt

banana
date`;

function ToggleItem({
  toggle,
  checked,
  onToggle
}: {
  toggle: { key: Toggle; label: string };
  checked: boolean;
  onToggle: (key: Toggle, checked: boolean) => void;
}) {
  const handleCheckedChange = (next: boolean) => onToggle(toggle.key, next);
  return (
    <DropdownMenuCheckboxItem
      checked={checked}
      closeOnClick={false}
      onCheckedChange={handleCheckedChange}
    >
      {toggle.label}
    </DropdownMenuCheckboxItem>
  );
}

export default function LineTools() {
  const [options, setOptions] = useState<LineOptions>(DEFAULT_LINE_OPTIONS);
  const transform = useCallback(
    (input: string) => processLines(input, options),
    [options]
  );

  // Same persisted store TransformTool reads, used only for the removed count.
  const { input } = usePersistedInput();
  const deferredInput = useDeferredValue(input);
  const removed = useMemo(
    () => countLines(deferredInput) - countLines(transform(deferredInput)),
    [deferredInput, transform]
  );
  const activeToggles = TOGGLES.filter(({ key }) => options[key]).length;

  const handleSortChange = (sort: LineSort) =>
    setOptions((current) => ({ ...current, sort }));
  const handleToggle = (key: Toggle, checked: boolean) =>
    setOptions((current) => ({ ...current, [key]: checked }));

  return (
    <TransformTool
      transform={transform}
      input={{ label: "Lines", sample: SAMPLE_LINES }}
      output={{ label: "Lines", extension: "txt", mimeType: "text/plain" }}
      options={
        <div className="mr-1 flex items-center gap-1">
          {removed > 0 && (
            <Badge
              variant="outline"
              className="text-muted-foreground max-sm:hidden"
            >
              −{removed.toLocaleString()} {removed === 1 ? "line" : "lines"}
            </Badge>
          )}
          <OptionSelect
            label="Sort"
            value={options.sort}
            options={SORT_OPTIONS}
            onValueChange={handleSortChange}
            size="sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="sm" className="h-7 gap-1.5" />
              }
            >
              <SlidersHorizontal />
              <span className="max-sm:sr-only">Options</span>
              {activeToggles > 0 && (
                <span className="rounded-sm bg-primary px-1 font-mono text-[10px] leading-4 text-primary-foreground tabular-nums">
                  {activeToggles}
                </span>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Clean up</DropdownMenuLabel>
                {TOGGLES.map((toggle) => (
                  <ToggleItem
                    key={toggle.key}
                    toggle={toggle}
                    checked={options[toggle.key]}
                    onToggle={handleToggle}
                  />
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      }
    />
  );
}
