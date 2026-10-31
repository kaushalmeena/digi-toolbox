"use client";

import { CircleAlert } from "lucide-react";
import {
  type ChangeEvent,
  Fragment,
  useDeferredValue,
  useMemo,
  useState
} from "react";

import { CodeEditor } from "@/components/tool/code-editor";
import { Pane, PaneBody, PaneFooter, PaneHeader } from "@/components/tool/pane";
import { InputActions } from "@/components/tool/tool-actions";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { usePersistedInput } from "@/hooks/use-persisted-input";
import { cn } from "@/lib/utils";

import {
  findMatches,
  MAX_MATCHES,
  type RegexMatch,
  splitByMatches
} from "./lib";

const FLAGS = [
  {
    flag: "g",
    name: "Global",
    description: "Find all matches, not just the first"
  },
  {
    flag: "i",
    name: "Ignore case",
    description: "Match letters regardless of case"
  },
  {
    flag: "m",
    name: "Multiline",
    description: "^ and $ match at the start and end of each line"
  },
  { flag: "s", name: "Dot all", description: ". also matches newlines" },
  {
    flag: "u",
    name: "Unicode",
    description: "Treat the pattern as Unicode code points and enable \\p{…}"
  },
  {
    flag: "y",
    name: "Sticky",
    description: "Only match at the position where the previous match ended"
  }
] as const;

const DEFAULT_PATTERN = String.raw`(?<user>[\w.+-]+)@(?<domain>[\w-]+(?:\.[\w-]+)+)`;

const SAMPLE = `Contact ada@example.com or grace.hopper@navy.mil for access.
Support: help+tools@digi-toolbox.dev
Not an email: someone@localhost`;

function Highlighted({
  text,
  matches
}: {
  text: string;
  matches: readonly RegexMatch[];
}) {
  const segments = useMemo(
    () => splitByMatches(text, matches),
    [text, matches]
  );
  return (
    <pre className="scrollbar-thin overflow-auto border-b p-3 font-mono text-[13px] leading-5 break-all whitespace-pre-wrap max-md:max-h-60 md:max-h-[45%] md:shrink-0">
      {segments.map((segment, index) =>
        segment.match === null ? (
          // Segments are recomputed wholesale, so position is the identity.
          // oxlint-disable-next-line react/no-array-index-key
          <Fragment key={index}>{segment.text}</Fragment>
        ) : segment.text === "" ? (
          <span
            // oxlint-disable-next-line react/no-array-index-key
            key={index}
            title={`Empty match #${segment.match + 1}`}
            className="mx-px inline-block h-4 w-0.5 translate-y-0.5 rounded-full bg-primary"
          />
        ) : (
          <mark
            // oxlint-disable-next-line react/no-array-index-key
            key={index}
            title={`Match #${segment.match + 1}`}
            className={cn(
              "rounded-xs text-foreground",
              segment.match % 2 === 0 ? "bg-primary/15" : "bg-primary/30"
            )}
          >
            {segment.text}
          </mark>
        )
      )}
    </pre>
  );
}

function MatchList({ matches }: { matches: readonly RegexMatch[] }) {
  return (
    <ol className="divide-y">
      {matches.map((match, index) => (
        <li key={match.index} className="flex flex-col gap-1.5 px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">#{index + 1}</span>
            <span className="font-mono tabular-nums">
              {match.index}–{match.end}
            </span>
          </div>
          <code className="font-mono text-[13px] break-all">
            {match.value === "" ? (
              <span className="text-muted-foreground italic">empty match</span>
            ) : (
              match.value
            )}
          </code>
          {match.groups.length > 0 && (
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 font-mono text-xs">
              {match.groups.map((group) => {
                const named = !/^\d+$/.test(group.name);
                return (
                  <Fragment key={`${named ? "n" : "i"}:${group.name}`}>
                    <dt
                      className={cn(
                        "text-muted-foreground",
                        named && "text-primary"
                      )}
                    >
                      {named ? `<${group.name}>` : `$${group.name}`}
                    </dt>
                    <dd className="min-w-0 break-all">
                      {group.value ?? (
                        <span className="text-muted-foreground/70 italic">
                          undefined
                        </span>
                      )}
                    </dd>
                  </Fragment>
                );
              })}
            </dl>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function RegexTester() {
  const { input, setInput, buildShareUrl } = usePersistedInput();
  const [pattern, setPattern] = useState(DEFAULT_PATTERN);
  const [flags, setFlags] = useState<string[]>(["g"]);
  const flagString = FLAGS.map(({ flag }) => flag)
    .filter((flag) => flags.includes(flag))
    .join("");

  const deferredInput = useDeferredValue(input);
  const deferredPattern = useDeferredValue(pattern);
  const { matches, error } = useMemo(
    () => findMatches(deferredPattern, flagString, deferredInput),
    [deferredPattern, flagString, deferredInput]
  );
  const capped = matches.length >= MAX_MATCHES;

  const handlePatternChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPattern(event.target.value);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <Pane className="min-h-0 shrink-0 md:min-h-0">
        <PaneHeader title="Pattern" />
        <div className="flex flex-wrap items-center gap-2 p-2">
          <div
            className={cn(
              "flex h-9 min-w-0 flex-1 basis-64 items-center rounded-lg border border-input px-2.5 font-mono text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30",
              error &&
                "border-destructive focus-within:border-destructive focus-within:ring-destructive/20"
            )}
          >
            <span aria-hidden className="text-muted-foreground select-none">
              /
            </span>
            <input
              aria-label="Regular expression"
              aria-invalid={!!error}
              value={pattern}
              onChange={handlePatternChange}
              placeholder="pattern"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="h-full min-w-0 flex-1 bg-transparent px-0.5 outline-none placeholder:text-muted-foreground/70"
            />
            <span aria-hidden className="text-muted-foreground select-none">
              /{flagString}
            </span>
          </div>
          <ToggleGroup
            multiple
            value={flags}
            onValueChange={setFlags}
            variant="outline"
            size="sm"
            spacing={0}
            aria-label="Flags"
          >
            {FLAGS.map(({ flag, name, description }) => (
              <Tooltip key={flag}>
                <TooltipTrigger
                  render={
                    <ToggleGroupItem
                      value={flag}
                      aria-label={`${name} (${flag})`}
                      className="w-8 font-mono aria-pressed:bg-primary/12 aria-pressed:text-primary"
                    />
                  }
                >
                  {flag}
                </TooltipTrigger>
                <TooltipContent>
                  <span>
                    <span className="font-medium">{name}</span> — {description}
                  </span>
                </TooltipContent>
              </Tooltip>
            ))}
          </ToggleGroup>
        </div>
        {error && (
          <p
            role="alert"
            className="flex items-start gap-1.5 px-3 pb-2.5 font-mono text-xs text-destructive"
          >
            <CircleAlert className="mt-px size-3.5 shrink-0" />
            {error}
          </p>
        )}
      </Pane>
      <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-2">
        <Pane>
          <PaneHeader
            title="Test text"
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
              label="Test text"
              value={input}
              onChange={setInput}
              placeholder="Type or paste text to test the pattern against…"
              autoFocus
            />
          </PaneBody>
          <PaneFooter>
            <span>{input.length.toLocaleString()} chars</span>
          </PaneFooter>
        </Pane>
        <Pane>
          <PaneHeader
            title="Matches"
            badge={
              matches.length > 0 && (
                <Badge variant="secondary" className="tabular-nums">
                  {capped ? `${MAX_MATCHES.toLocaleString()}+` : matches.length}
                </Badge>
              )
            }
          />
          <PaneBody>
            {deferredInput && !error && pattern ? (
              <>
                <Highlighted text={deferredInput} matches={matches} />
                <div className="min-h-0 flex-1 scrollbar-thin overflow-auto">
                  {matches.length === 0 ? (
                    <p className="p-6 text-center text-sm text-muted-foreground">
                      No matches.
                    </p>
                  ) : (
                    <MatchList matches={matches} />
                  )}
                </div>
              </>
            ) : (
              <p className="p-6 text-center text-sm text-muted-foreground">
                {error
                  ? "Fix the pattern to see matches."
                  : "Matches appear here as you type."}
              </p>
            )}
          </PaneBody>
          <PaneFooter>
            {error ? (
              <span className="flex items-center gap-1 text-destructive">
                <CircleAlert className="size-3" /> Invalid pattern
              </span>
            ) : (
              <span className={cn(matches.length > 0 && "text-success")}>
                {matches.length.toLocaleString()}
                {capped && "+"} {matches.length === 1 ? "match" : "matches"}
                {capped && ` (showing first ${MAX_MATCHES.toLocaleString()})`}
              </span>
            )}
          </PaneFooter>
        </Pane>
      </div>
    </div>
  );
}
