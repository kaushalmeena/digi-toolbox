"use client";

import { ChevronRight, House, Search, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import { Kbd } from "@/components/ui/kbd";
import { useWorkspace } from "@/hooks/use-workspace";
import { cn } from "@/lib/utils";
import {
  getTool,
  type Tool,
  TOOL_GROUPS,
  TOOLS,
  toolHref
} from "@/tools/registry";

import { Brand } from "./brand";
import { CategoryIcon } from "./category-icon";
import { useOpenCommandMenu } from "./command-menu";
import { GithubIcon } from "./github-icon";
import { ThemeSwitcher } from "./theme-switcher";

const itemClass =
  "flex h-7 items-center gap-2 rounded-md px-2 text-[13px] transition-colors outline-none hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring";

function NavLink({
  tool,
  active,
  onNavigate
}: {
  tool: Tool;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={toolHref(tool.slug)}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        itemClass,
        "pl-8",
        active &&
          "bg-sidebar-accent font-medium text-sidebar-accent-foreground hover:bg-sidebar-accent"
      )}
    >
      <span className="truncate">{tool.name}</span>
      {tool.isNew && (
        <span className="ml-auto rounded-sm bg-primary/12 px-1 text-[10px] font-semibold text-primary">
          NEW
        </span>
      )}
    </Link>
  );
}

/**
 * Sidebar contents: brand, search, pinned tools and every category. Rendered
 * in the desktop rail and the mobile drawer (which passes `onNavigate` to
 * close itself).
 */
export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const openCommandMenu = useOpenCommandMenu();
  const { favorites } = useWorkspace();
  const favoriteTools = favorites.flatMap((slug) => getTool(slug) ?? []);

  const handleSearchClick = () => {
    onNavigate?.();
    openCommandMenu();
  };

  return (
    <>
      <div className="flex h-12 shrink-0 items-center px-4">
        <Brand />
      </div>
      <div className="px-3 pb-2">
        <button
          type="button"
          onClick={handleSearchClick}
          className="flex h-8 w-full items-center gap-2 rounded-md border bg-background/60 px-2.5 text-[13px] text-muted-foreground shadow-xs transition-colors hover:bg-background hover:text-foreground"
        >
          <Search className="size-3.5" />
          Search tools…
          <Kbd className="ml-auto">⌘K</Kbd>
        </button>
      </div>
      <nav
        aria-label="Tools"
        className="min-h-0 flex-1 scrollbar-thin overflow-y-auto px-3 pb-4"
      >
        <Link
          href="/"
          onClick={onNavigate}
          aria-current={pathname === "/" ? "page" : undefined}
          className={cn(
            itemClass,
            pathname === "/" &&
              "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
          )}
        >
          <House className="size-4 text-muted-foreground" />
          Overview
        </Link>
        {favoriteTools.length > 0 && (
          <div className="mt-4">
            <p className="flex items-center gap-1.5 px-2 pb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
              <Star className="size-3" /> Favorites
            </p>
            {favoriteTools.map((tool) => (
              <Link
                key={tool.slug}
                href={toolHref(tool.slug)}
                onClick={onNavigate}
                aria-current={
                  pathname === toolHref(tool.slug) ? "page" : undefined
                }
                className={cn(
                  itemClass,
                  pathname === toolHref(tool.slug) &&
                    "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                )}
              >
                <CategoryIcon category={tool.category} />
                <span className="truncate">{tool.name}</span>
              </Link>
            ))}
          </div>
        )}
        <p className="mt-4 px-2 pb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Tools
        </p>
        {TOOL_GROUPS.map(({ category, tools }) => (
          <Collapsible key={category.id} defaultOpen>
            <CollapsibleTrigger
              className={cn(
                itemClass,
                "group w-full font-medium text-sidebar-foreground"
              )}
            >
              <CategoryIcon category={category.id} />
              {category.name}
              <span className="ml-auto text-[11px] font-normal text-muted-foreground tabular-nums">
                {tools.length}
              </span>
              <ChevronRight className="size-3.5 text-muted-foreground transition-transform group-data-panel-open:rotate-90" />
            </CollapsibleTrigger>
            <CollapsibleContent className="mb-1 overflow-hidden">
              {tools.map((tool) => (
                <NavLink
                  key={tool.slug}
                  tool={tool}
                  active={pathname === toolHref(tool.slug)}
                  onNavigate={onNavigate}
                />
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </nav>
      <div className="flex h-12 shrink-0 items-center gap-2 border-t border-sidebar-border px-3">
        <ThemeSwitcher />
        <span className="ml-auto text-[11px] text-muted-foreground tabular-nums">
          {TOOLS.length} tools
        </span>
        <a
          href="https://github.com/kaushalmeena/digi-toolbox"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
          className="flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
        >
          <GithubIcon className="size-4" />
        </a>
      </div>
    </>
  );
}
