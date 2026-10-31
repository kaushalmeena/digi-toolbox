"use client";

import { Copy, RefreshCw } from "lucide-react";
import { type ChangeEvent, useState, useSyncExternalStore } from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { IconButton } from "@/components/tool/icon-button";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { OutputActions } from "@/components/tool/tool-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

import {
  clampPasswordLength,
  estimateEntropyBits,
  generatePassword,
  hasCharacterClass,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  type PasswordOptions,
  type PasswordStrength,
  passwordStrength
} from "./lib";

const MAX_PASSWORDS = 500;

const CLASS_TOGGLES = [
  { id: "uppercase", label: "Uppercase", hint: "A–Z" },
  { id: "lowercase", label: "Lowercase", hint: "a–z" },
  { id: "digits", label: "Digits", hint: "0–9" },
  { id: "symbols", label: "Symbols", hint: "!@#$%…" },
  { id: "excludeAmbiguous", label: "Exclude ambiguous", hint: "Il1O0o" }
] as const;

type ClassToggleId = (typeof CLASS_TOGGLES)[number]["id"];

const STRENGTH_STYLES: Record<
  PasswordStrength,
  { level: number; bar: string; text: string }
> = {
  weak: { level: 1, bar: "bg-destructive", text: "text-destructive" },
  fair: { level: 2, bar: "bg-warning", text: "text-warning" },
  strong: { level: 3, bar: "bg-success", text: "text-success" },
  "very strong": { level: 4, bar: "bg-success", text: "text-success" }
};

const subscribeNoop = () => () => {};

const generateOne = (options: PasswordOptions) =>
  hasCharacterClass(options) ? generatePassword(options) : "";

const generateMany = (options: PasswordOptions, total: number) =>
  hasCharacterClass(options)
    ? Array.from({ length: total }, () => generatePassword(options))
    : [];

export default function PasswordGenerator() {
  // Passwords are random, so they're only generated in the browser — the
  // server render shows an empty placeholder, avoiding a hydration mismatch.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false
  );
  const [options, setOptions] = useState<PasswordOptions>({
    length: 20,
    uppercase: true,
    lowercase: true,
    digits: true,
    symbols: true,
    excludeAmbiguous: false
  });
  const [lengthDraft, setLengthDraft] = useState("20");
  const [count, setCount] = useState(10);
  // null until first generated in the browser.
  const [password, setPassword] = useState<string | null>(null);
  const [bulk, setBulk] = useState<string[]>([]);

  const valid = hasCharacterClass(options);

  if (mounted && password === null) {
    setPassword(generateOne(options));
    setBulk(generateMany(options, count));
  }

  const applyOptions = (next: PasswordOptions) => {
    setOptions(next);
    setPassword(generateOne(next));
    setBulk(generateMany(next, count));
  };

  const setLength = (length: number) => {
    applyOptions({ ...options, length: clampPasswordLength(length) });
  };

  const handleRegenerate = () => setPassword(generateOne(options));

  const handleCopy = () => {
    if (password) {
      copyToClipboard(password);
    }
  };

  const handleSliderChange = (value: number | readonly number[]) => {
    const length = typeof value === "number" ? value : value[0];
    setLength(length);
    setLengthDraft(String(length));
  };

  const handleLengthInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLengthDraft(event.target.value);
    if (!Number.isNaN(event.target.valueAsNumber)) {
      setLength(event.target.valueAsNumber);
    }
  };

  const handleLengthInputBlur = () => setLengthDraft(String(options.length));

  const handleToggle = (id: ClassToggleId, checked: boolean) =>
    applyOptions({ ...options, [id]: checked });

  const handleCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const total = Math.max(
      1,
      Math.min(event.target.valueAsNumber || 1, MAX_PASSWORDS)
    );
    setCount(total);
    setBulk(generateMany(options, total));
  };

  const handleGenerateBulk = () => setBulk(generateMany(options, count));

  const bulkText = bulk.join("\n");
  const entropy = estimateEntropyBits(options);
  const strength = passwordStrength(entropy);
  const style = STRENGTH_STYLES[strength];

  return (
    <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader
          title="Password"
          actions={
            <>
              <IconButton
                label="Regenerate"
                disabled={!valid}
                onClick={handleRegenerate}
              >
                <RefreshCw />
              </IconButton>
              <IconButton
                label="Copy"
                disabled={!password}
                onClick={handleCopy}
              >
                <Copy />
              </IconButton>
            </>
          }
        />
        <div className="flex flex-col gap-3 p-4">
          <output
            aria-live="polite"
            className="min-h-9 font-mono text-xl leading-9 break-all select-all sm:text-2xl"
          >
            {valid ? (
              password || (
                <span className="text-muted-foreground/60">Generating…</span>
              )
            ) : (
              <span className="text-base text-destructive">
                Enable at least one character set.
              </span>
            )}
          </output>
          <div className="flex items-center gap-3">
            <div
              className="flex h-1.5 flex-1 gap-1"
              role="meter"
              aria-label="Password strength"
              aria-valuemin={0}
              aria-valuemax={4}
              aria-valuenow={valid ? style.level : 0}
              aria-valuetext={valid ? strength : "none"}
            >
              {[1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={cn(
                    "flex-1 rounded-full bg-muted transition-colors",
                    valid && level <= style.level && style.bar
                  )}
                />
              ))}
            </div>
            <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
              {valid ? (
                <>
                  <span className={cn("font-medium capitalize", style.text)}>
                    {strength}
                  </span>{" "}
                  · ~{Math.round(entropy)} bits
                </>
              ) : (
                "—"
              )}
            </span>
          </div>
        </div>
      </Pane>

      <Pane className="min-h-0">
        <PaneHeader title="Options" />
        <div className="flex flex-col gap-4 p-3">
          <div className="flex items-center gap-3">
            <Label htmlFor="password-length" className="w-14 shrink-0">
              Length
            </Label>
            <Slider
              aria-label="Password length"
              min={PASSWORD_MIN_LENGTH}
              max={PASSWORD_MAX_LENGTH}
              value={[options.length]}
              onValueChange={handleSliderChange}
              className="flex-1"
            />
            <Input
              id="password-length"
              type="number"
              min={PASSWORD_MIN_LENGTH}
              max={PASSWORD_MAX_LENGTH}
              className="h-8 w-20 font-mono"
              value={lengthDraft}
              onChange={handleLengthInputChange}
              onBlur={handleLengthInputBlur}
            />
          </div>
          <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {CLASS_TOGGLES.map((toggle) => (
              <ClassToggle
                key={toggle.id}
                toggle={toggle}
                checked={options[toggle.id]}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </Pane>

      <Pane className="flex-1">
        <PaneHeader
          title="Multiple passwords"
          actions={<OutputActions value={bulkText} filename="passwords.txt" />}
        />
        <div className="flex items-center gap-2 border-b p-3">
          <Label htmlFor="password-count">How many</Label>
          <Input
            id="password-count"
            type="number"
            min={1}
            max={MAX_PASSWORDS}
            className="h-8 w-24 font-mono"
            value={count}
            onChange={handleCountChange}
          />
          <Button
            className="ml-auto"
            disabled={!valid}
            onClick={handleGenerateBulk}
          >
            <RefreshCw /> Generate
          </Button>
        </div>
        <PaneBody>
          <CodeEditor label="Generated passwords" value={bulkText} />
        </PaneBody>
        <PaneFooter>
          <span>
            {bulk.length} × {options.length} chars
          </span>
        </PaneFooter>
      </Pane>
    </div>
  );
}

function ClassToggle({
  toggle,
  checked,
  onToggle
}: {
  toggle: (typeof CLASS_TOGGLES)[number];
  checked: boolean;
  onToggle: (id: ClassToggleId, checked: boolean) => void;
}) {
  const id = `password-${toggle.id}`;
  const handleCheckedChange = (next: boolean) => onToggle(toggle.id, next);

  return (
    <div className="flex items-center gap-2">
      <Switch id={id} checked={checked} onCheckedChange={handleCheckedChange} />
      <Label htmlFor={id}>
        {toggle.label}
        <span className="font-mono text-xs font-normal text-muted-foreground">
          {toggle.hint}
        </span>
      </Label>
    </div>
  );
}
