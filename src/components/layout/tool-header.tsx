"use client";

import { Star } from "lucide-react";
import { useEffect } from "react";

import { useWorkspace } from "@/hooks/use-workspace";
import { cn } from "@/lib/utils";
import { getCategory, type Tool } from "@/tools/registry";

import { IconButton } from "../tool/icon-button";
import { CategoryIcon } from "./category-icon";

export function ToolHeader({ tool }: { tool: Tool }) {
  const { favorites, toggleFavorite, recordVisit } = useWorkspace();
  const isFavorite = favorites.includes(tool.slug);

  useEffect(() => recordVisit(tool.slug), [tool.slug, recordVisit]);

  const handleFavoriteToggle = () => toggleFavorite(tool.slug);

  return (
    <header className="flex shrink-0 items-center gap-3 border-b px-4 py-3 md:px-5">
      <CategoryIcon category={tool.category} size="lg" />
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">
          {getCategory(tool.category).name}
        </p>
        <h1 className="truncate text-base leading-tight font-semibold tracking-tight">
          {tool.name}
        </h1>
      </div>
      <p className="hidden max-w-md text-right text-sm text-balance text-muted-foreground lg:block">
        {tool.description}
      </p>
      <IconButton
        label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        onClick={handleFavoriteToggle}
        aria-pressed={isFavorite}
      >
        <Star className={cn(isFavorite && "fill-amber-400 text-amber-400")} />
      </IconButton>
    </header>
  );
}
