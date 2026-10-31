"use client";

import { RefreshCw } from "lucide-react";
import { type ChangeEvent, useState } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { OutputActions } from "@/components/tool/tool-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { generateUUIDs, MAX_UUIDS } from "./lib";

export default function UUIDGenerator() {
  const [count, setCount] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  // Lazy initial state: generated once on mount, then only on demand.
  const [uuids, setUuids] = useState(() => generateUUIDs(10));

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCount(event.target.valueAsNumber || 1);

  const handleGenerate = () => setUuids(generateUUIDs(count));

  const output = uuids
    .map((uuid) => {
      const value = hyphens ? uuid : uuid.replaceAll("-", "");
      return uppercase ? value.toUpperCase() : value;
    })
    .join("\n");

  return (
    <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader title="Options" />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 p-3">
          <div className="flex items-center gap-2">
            <Label htmlFor="uuid-count">How many</Label>
            <Input
              id="uuid-count"
              type="number"
              min={1}
              max={MAX_UUIDS}
              className="h-8 w-24 font-mono"
              value={count}
              onChange={handleCountChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="uuid-upper"
              checked={uppercase}
              onCheckedChange={setUppercase}
            />
            <Label htmlFor="uuid-upper">Uppercase</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="uuid-hyphens"
              checked={hyphens}
              onCheckedChange={setHyphens}
            />
            <Label htmlFor="uuid-hyphens">Hyphens</Label>
          </div>
          <Button className="ml-auto" onClick={handleGenerate}>
            <RefreshCw /> Generate
          </Button>
        </div>
      </Pane>
      <Pane className="flex-1">
        <PaneHeader
          title="UUIDs"
          actions={<OutputActions value={output} filename="uuids.txt" />}
        />
        <PaneBody>
          <CodeEditor label="Generated UUIDs" value={output} />
        </PaneBody>
        <PaneFooter>
          <span>{uuids.length} × UUID v4</span>
        </PaneFooter>
      </Pane>
    </div>
  );
}
