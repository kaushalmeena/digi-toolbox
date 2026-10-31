"use client";

import { Copy } from "lucide-react";
import type { ReactNode } from "react";

import { copyToClipboard } from "@/lib/clipboard";
import { cn } from "@/lib/utils";

export type ResultItem = {
  id: string;
  label: ReactNode;
  value: string;
  /** Secondary text under the label, e.g. a unit symbol. */
  hint?: ReactNode;
  /** Leading visual such as a color swatch. */
  adornment?: ReactNode;
  active?: boolean;
};

/**
 * A list of labelled values — every unit of a conversion, every case style,
 * every URL part — each copyable with one click. With `onSelect`, clicking a
 * row's label promotes it (e.g. makes that unit the source).
 */
export function ResultList({
  items,
  onSelect,
  emptyText = "Nothing to show yet.",
  className
}: {
  items: readonly ResultItem[];
  onSelect?: (id: string) => void;
  emptyText?: string;
  className?: string;
}) {
  if (items.length === 0) {
    return (
      <p className="p-6 text-center text-sm text-muted-foreground">
        {emptyText}
      </p>
    );
  }

  return (
    <ul className={cn("divide-y", className)}>
      {items.map((item) => (
        <li
          key={item.id}
          className={cn(
            "group flex min-h-11 items-center gap-3 px-3 py-1.5 transition-colors hover:bg-muted/50",
            item.active && "bg-accent/60 hover:bg-accent/70"
          )}
        >
          {item.adornment}
          <button
            type="button"
            disabled={!onSelect}
            onClick={() => onSelect?.(item.id)}
            className="w-40 shrink-0 text-left disabled:cursor-default max-sm:w-28"
          >
            <span
              className={cn(
                "block truncate text-sm",
                item.active
                  ? "font-medium text-accent-foreground"
                  : "text-foreground"
              )}
            >
              {item.label}
            </span>
            {item.hint && (
              <span className="block truncate text-xs text-muted-foreground">
                {item.hint}
              </span>
            )}
          </button>
          <output className="min-w-0 flex-1 truncate font-mono text-sm tabular-nums select-all">
            {item.value || <span className="text-muted-foreground/60">—</span>}
          </output>
          <button
            type="button"
            aria-label={`Copy ${typeof item.label === "string" ? item.label : "value"}`}
            disabled={!item.value}
            onClick={() => copyToClipboard(item.value)}
            className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground opacity-0 transition group-hover:opacity-100 hover:bg-background hover:text-foreground focus-visible:opacity-100 disabled:hidden"
          >
            <Copy className="size-3.5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
