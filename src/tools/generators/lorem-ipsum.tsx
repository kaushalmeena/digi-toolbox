"use client";

import { RefreshCw } from "lucide-react";
import { type ChangeEvent, useState, useSyncExternalStore } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { OptionSelect } from "@/components/tool/option-select";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { OutputActions } from "@/components/tool/tool-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  generateLorem,
  LOREM_MAX_COUNT,
  type LoremOptions,
  type LoremUnit
} from "./lib";

const UNIT_OPTIONS: { value: LoremUnit; label: string }[] = [
  { value: "paragraphs", label: "Paragraphs" },
  { value: "sentences", label: "Sentences" },
  { value: "words", label: "Words" }
];

const subscribeNoop = () => () => {};

export default function LoremIpsumGenerator() {
  // Random text is only generated in the browser to avoid a hydration mismatch.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
  const [options, setOptions] = useState<LoremOptions>({
    count: 3,
    unit: "paragraphs",
    startWithLorem: true
  });
  const [output, setOutput] = useState<string | null>(null);

  if (mounted && output === null) {
    setOutput(generateLorem(options));
  }

  const applyOptions = (next: LoremOptions) => {
    setOptions(next);
    setOutput(generateLorem(next));
  };

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) =>
    applyOptions({
      ...options,
      count: Math.max(
        1,
        Math.min(event.target.valueAsNumber || 1, LOREM_MAX_COUNT)
      )
    });

  const handleUnitChange = (unit: LoremUnit) =>
    applyOptions({ ...options, unit });

  const handleStartWithLoremChange = (startWithLorem: boolean) =>
    applyOptions({ ...options, startWithLorem });

  const handleGenerate = () => setOutput(generateLorem(options));

  const text = output ?? "";
  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return (
    <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader title="Options" />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 p-3">
          <div className="flex items-center gap-2">
            <Input
              aria-label="How many"
              type="number"
              min={1}
              max={LOREM_MAX_COUNT}
              className="h-8 w-20 font-mono"
              value={options.count}
              onChange={handleCountChange}
            />
            <OptionSelect
              label="Unit"
              className="w-32"
              value={options.unit}
              options={UNIT_OPTIONS}
              onValueChange={handleUnitChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="lorem-start"
              checked={options.startWithLorem}
              onCheckedChange={handleStartWithLoremChange}
            />
            <Label htmlFor="lorem-start">
              Start with &ldquo;Lorem ipsum…&rdquo;
            </Label>
          </div>
          <Button className="ml-auto" onClick={handleGenerate}>
            <RefreshCw /> Generate
          </Button>
        </div>
      </Pane>
      <Pane className="flex-1">
        <PaneHeader
          title="Text"
          actions={<OutputActions value={text} filename="lorem-ipsum.txt" />}
        />
        <PaneBody>
          {/* Prose reads better soft-wrapped; the line gutter would no longer
              line up with wrapped lines, so it's hidden. */}
          <CodeEditor
            label="Generated text"
            value={text}
            className="[&_textarea]:whitespace-pre-wrap [&>[aria-hidden]]:hidden"
          />
        </PaneBody>
        <PaneFooter>
          <span>{wordCount.toLocaleString()} words</span>
          <span>{text.length.toLocaleString()} chars</span>
        </PaneFooter>
      </Pane>
    </div>
  );
}
