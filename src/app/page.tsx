import { Lock, WifiOff, Zap } from "lucide-react";

import { SearchTrigger } from "@/components/home/search-trigger";
import { ToolCard } from "@/components/home/tool-card";
import { WorkspaceShelf } from "@/components/home/workspace-shelf";
import { CategoryIcon } from "@/components/layout/category-icon";
import { TOOL_GROUPS, TOOLS } from "@/tools/registry";

const HIGHLIGHTS = [
  { icon: Zap, label: "Instant, as you type" },
  { icon: Lock, label: "Private — nothing leaves your browser" },
  { icon: WifiOff, label: "Works offline" }
];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 md:px-8 md:py-12">
      <section className="flex flex-col items-start gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-primary">
            {TOOLS.length} developer tools · one keyboard shortcut away
          </p>
          <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Convert, format, encode and inspect — without leaving the keyboard.
          </h1>
        </div>
        <SearchTrigger />
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Icon className="size-3.5" />
              {label}
            </li>
          ))}
        </ul>
      </section>

      <WorkspaceShelf />

      {TOOL_GROUPS.map(({ category, tools }) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-heading`}
        >
          <h2
            id={`${category.id}-heading`}
            className="mb-3 flex items-center gap-2 text-sm font-medium"
          >
            <CategoryIcon category={category.id} />
            {category.name}
            <span className="text-xs font-normal text-muted-foreground tabular-nums">
              {tools.length}
            </span>
          </h2>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
