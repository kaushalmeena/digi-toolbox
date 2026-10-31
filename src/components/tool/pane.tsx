import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * An editor-style panel: a bordered surface with an optional header bar
 * (title + actions) and status footer. Panes stretch to fill their grid cell,
 * so a tool's panes always line up edge to edge.
 */
export function Pane({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex min-h-72 min-w-0 flex-col overflow-hidden rounded-lg border bg-editor shadow-xs md:min-h-0",
        className
      )}
      {...props}
    />
  );
}

export function PaneHeader({
  title,
  badge,
  actions,
  className
}: {
  title: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex h-10 shrink-0 items-center gap-2 border-b bg-muted/40 pr-1.5 pl-3",
        className
      )}
    >
      <h2 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {title}
      </h2>
      {badge}
      <div className="ml-auto flex items-center gap-0.5">{actions}</div>
    </header>
  );
}

export function PaneBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("relative flex min-h-0 flex-1 flex-col", className)}
      {...props}
    />
  );
}

export function PaneFooter({ className, ...props }: ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "flex h-7 shrink-0 items-center gap-3 border-t bg-muted/40 px-3 font-mono text-[11px] text-muted-foreground tabular-nums",
        className
      )}
      {...props}
    />
  );
}
