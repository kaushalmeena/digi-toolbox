"use client";

import { Clock, Star } from "lucide-react";

import { useWorkspace } from "@/hooks/use-workspace";
import { getTool } from "@/tools/registry";

import { ToolCard } from "./tool-card";

/** The visitor's pinned and recent tools; renders nothing for a first visit. */
export function WorkspaceShelf() {
  const { favorites, recents } = useWorkspace();
  const shelves = [
    { title: "Favorites", icon: Star, slugs: favorites },
    { title: "Recently used", icon: Clock, slugs: recents }
  ].filter((shelf) => shelf.slugs.length > 0);

  return shelves.map(({ title, icon: Icon, slugs }) => (
    <section key={title} aria-label={title}>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-medium">
        <Icon className="size-4 text-muted-foreground" /> {title}
      </h2>
      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {slugs.flatMap((slug) => {
          const tool = getTool(slug);
          return tool ? [<ToolCard key={slug} tool={tool} />] : [];
        })}
      </div>
    </section>
  ));
}
