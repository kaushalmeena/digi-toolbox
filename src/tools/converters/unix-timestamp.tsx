"use client";

import { Clock } from "lucide-react";
import { type ChangeEvent, useMemo, useSyncExternalStore } from "react";

import { Pane, PaneBody, PaneHeader } from "@/components/tool/pane";
import { ResultList } from "@/components/tool/result-list";
import { InputActions } from "@/components/tool/tool-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePersistedInput } from "@/hooks/use-persisted-input";

import {
  formatRelativeTime,
  getDayOfYear,
  getISOWeek,
  parseTimestamp
} from "./lib";

/*
 * A one-second clock as an external store. The server snapshot is null, so
 * the first render matches the server and the time appears once mounted.
 */
let clockNow = 0;

function subscribeClock(onChange: () => void) {
  const tick = () => {
    clockNow = Date.now();
    onChange();
  };
  tick();
  const id = window.setInterval(tick, 1000);
  return () => window.clearInterval(id);
}

function getClock() {
  if (!clockNow) {
    clockNow = Date.now();
  }
  return clockNow;
}

const getServerClock = () => null;

function timeZoneName(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export default function UnixTimestampConverter() {
  const { input, setInput, buildShareUrl } = usePersistedInput();
  const nowMs = useSyncExternalStore(subscribeClock, getClock, getServerClock);
  const now = useMemo(() => (nowMs === null ? null : new Date(nowMs)), [nowMs]);

  const { parsed, error } = useMemo(() => {
    if (!input.trim()) {
      return { parsed: null, error: null };
    }
    try {
      return { parsed: parseTimestamp(input), error: null };
    } catch (err) {
      return { parsed: null, error: (err as Error).message };
    }
  }, [input]);

  const date = parsed?.date ?? null;
  const ms = date?.getTime();
  const week = date ? getISOWeek(date) : null;

  const results = [
    {
      id: "seconds",
      label: "Unix seconds",
      value: ms === undefined ? "" : String(ms / 1000)
    },
    {
      id: "milliseconds",
      label: "Unix milliseconds",
      value: ms === undefined ? "" : String(ms)
    },
    {
      id: "iso",
      label: "ISO 8601",
      hint: "UTC",
      value: date?.toISOString() ?? ""
    },
    {
      id: "utc",
      label: "UTC",
      hint: "RFC 7231",
      value: date?.toUTCString() ?? ""
    },
    {
      id: "local",
      label: "Local time",
      hint: now ? timeZoneName() : undefined,
      value: date
        ? date.toLocaleString(undefined, {
            dateStyle: "full",
            timeStyle: "long"
          })
        : ""
    },
    {
      id: "relative",
      label: "Relative",
      value: date && now ? formatRelativeTime(date, now) : ""
    },
    {
      id: "weekday",
      label: "Day of week",
      hint: "local",
      value: date?.toLocaleDateString(undefined, { weekday: "long" }) ?? ""
    },
    {
      id: "week",
      label: "ISO week",
      hint: "local",
      value: week ? `${week.year}-W${String(week.week).padStart(2, "0")}` : ""
    },
    {
      id: "day-of-year",
      label: "Day of year",
      hint: "local",
      value: date ? String(getDayOfYear(date)) : ""
    }
  ];

  const handleUseNow = () => {
    if (nowMs !== null) {
      setInput(String(Math.floor(nowMs / 1000)));
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInput(event.target.value);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      <Pane className="min-h-0">
        <PaneHeader
          title="Current time"
          actions={
            <Button
              variant="ghost"
              size="sm"
              disabled={nowMs === null}
              onClick={handleUseNow}
            >
              <Clock /> Use now
            </Button>
          }
        />
        <ResultList
          items={[
            {
              id: "now-seconds",
              label: "Unix seconds",
              value: nowMs === null ? "" : String(Math.floor(nowMs / 1000))
            },
            {
              id: "now-milliseconds",
              label: "Unix milliseconds",
              value: nowMs === null ? "" : String(nowMs)
            }
          ]}
        />
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader
          title="Timestamp"
          badge={
            parsed && (
              <Badge variant="secondary" className="capitalize">
                {parsed.unit}
              </Badge>
            )
          }
          actions={
            <InputActions
              value={input}
              onChange={setInput}
              buildShareUrl={buildShareUrl}
            />
          }
        />
        <div className="p-3">
          <Input
            aria-label="Timestamp or date"
            aria-invalid={!!error}
            autoFocus
            spellCheck={false}
            placeholder="1700000000, 1700000000000 or 2024-01-15T10:30:00Z"
            className="h-10 font-mono text-base"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        {error && <p className="px-3 pb-3 text-sm text-destructive">{error}</p>}
      </Pane>
      <Pane className="min-h-0">
        <PaneHeader title="Formats" />
        <PaneBody>
          <ResultList items={results} />
        </PaneBody>
      </Pane>
    </div>
  );
}
