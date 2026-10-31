import Link from "next/link";

import { CategoryIcon } from "@/components/layout/category-icon";
import { type Tool, toolHref } from "@/tools/registry";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={toolHref(tool.slug)}
      className="group flex items-start gap-3 rounded-lg border bg-card p-3 shadow-xs transition hover:-translate-y-px hover:border-primary/30 hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <CategoryIcon category={tool.category} size="md" />
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <span className="truncate">{tool.name}</span>
          {tool.isNew && (
            <span className="rounded-sm bg-primary/12 px-1 text-[10px] font-semibold text-primary">
              NEW
            </span>
          )}
        </span>
        <span className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
          {tool.description}
        </span>
      </span>
    </Link>
  );
}
