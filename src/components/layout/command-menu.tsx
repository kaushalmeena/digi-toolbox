"use client";

import { CornerDownLeft, Monitor, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  createContext,
  type KeyboardEvent,
  type ReactNode,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Kbd } from "@/components/ui/kbd";
import { useHotkey } from "@/hooks/use-hotkey";
import { useWorkspace } from "@/hooks/use-workspace";
import { cn } from "@/lib/utils";
import {
  CATEGORIES,
  getCategory,
  getTool,
  type Tool,
  TOOLS,
  toolHref
} from "@/tools/registry";
import { searchTools } from "@/tools/search";

import { CategoryIcon } from "./category-icon";

type Item =
  | { kind: "tool"; id: string; tool: Tool }
  | {
      kind: "theme";
      id: string;
      theme: string;
      label: string;
      icon: ReactNode;
    };

type Section = { heading: string; items: Item[] };

const THEME_ITEMS: Item[] = [
  {
    kind: "theme",
    id: "theme:light",
    theme: "light",
    label: "Light theme",
    icon: <Sun />
  },
  {
    kind: "theme",
    id: "theme:dark",
    theme: "dark",
    label: "Dark theme",
    icon: <Moon />
  },
  {
    kind: "theme",
    id: "theme:system",
    theme: "system",
    label: "System theme",
    icon: <Monitor />
  }
];

const toolItem = (tool: Tool): Item => ({ kind: "tool", id: tool.slug, tool });

const CommandMenuContext = createContext<() => void>(() => {});

/** Opens the ⌘K command menu from anywhere in the app. */
export function useOpenCommandMenu() {
  return useContext(CommandMenuContext);
}

export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  useHotkey("mod+k", () => setOpen((value) => !value));
  const openMenu = useMemo(() => () => setOpen(true), []);

  return (
    <CommandMenuContext.Provider value={openMenu}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="top-[15vh] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-xl"
        >
          <DialogTitle className="sr-only">Search tools</DialogTitle>
          {/* Remounts on every open, so the query and selection start fresh. */}
          {open && <CommandMenu onDone={() => setOpen(false)} />}
        </DialogContent>
      </Dialog>
    </CommandMenuContext.Provider>
  );
}

function CommandMenu({ onDone }: { onDone: () => void }) {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { favorites, recents } = useWorkspace();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const sections = useMemo<Section[]>(() => {
    if (query.trim()) {
      const tools = searchTools(query, TOOLS).map(toolItem);
      const themes = THEME_ITEMS.filter(
        (item) =>
          item.kind === "theme" &&
          item.label.toLowerCase().includes(query.trim().toLowerCase())
      );
      return [
        { heading: "Tools", items: tools },
        { heading: "Preferences", items: themes }
      ];
    }
    const pick = (slugs: string[]) =>
      slugs.flatMap((slug) => {
        const tool = getTool(slug);
        return tool ? [toolItem(tool)] : [];
      });
    return [
      { heading: "Recent", items: pick(recents) },
      { heading: "Favorites", items: pick(favorites) },
      ...CATEGORIES.map((category) => ({
        heading: category.name,
        items: TOOLS.filter((tool) => tool.category === category.id).map(
          toolItem
        )
      })),
      { heading: "Preferences", items: THEME_ITEMS }
    ];
  }, [query, favorites, recents]);

  const visible = sections.filter((section) => section.items.length > 0);
  const flat = visible.flatMap((section) => section.items);

  const run = (item: Item | undefined) => {
    if (!item) {
      return;
    }
    if (item.kind === "tool") {
      router.push(toolHref(item.tool.slug));
    } else {
      setTheme(item.theme);
    }
    onDone();
  };

  const moveTo = (index: number) => {
    const next = (index + flat.length) % flat.length;
    setActiveIndex(next);
    listRef.current
      ?.querySelector(`[data-index="${next}"]`)
      ?.scrollIntoView({ block: "nearest" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (flat.length === 0) {
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveTo(activeIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      moveTo(activeIndex - 1);
    } else if (event.key === "Enter") {
      event.preventDefault();
      run(flat[activeIndex]);
    }
  };

  let index = -1;
  const activeId = flat[activeIndex]?.id;

  return (
    <div className="flex max-h-[min(70vh,560px)] flex-col">
      <div className="flex items-center gap-2 border-b px-4">
        <Search className="size-4 shrink-0 text-muted-foreground" />
        <input
          autoFocus
          role="combobox"
          aria-expanded
          aria-controls="command-menu-list"
          aria-activedescendant={activeId && `command-${activeId}`}
          aria-label="Search tools"
          placeholder="Search tools, formats, actions…"
          className="h-12 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={handleKeyDown}
        />
        <Kbd>Esc</Kbd>
      </div>
      <div
        ref={listRef}
        id="command-menu-list"
        role="listbox"
        className="min-h-0 flex-1 scrollbar-thin overflow-y-auto p-1.5"
      >
        {flat.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No tools match “{query}”.
          </p>
        )}
        {visible.map((section) => (
          <div key={section.heading} role="group" aria-label={section.heading}>
            <p className="px-2.5 pt-2.5 pb-1 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
              {section.heading}
            </p>
            {section.items.map((item) => {
              index += 1;
              const itemIndex = index;
              const active = itemIndex === activeIndex;
              return (
                // Keyboard users drive the options from the combobox input
                // (aria-activedescendant), so options only need pointer events.
                // oxlint-disable-next-line jsx-a11y/click-events-have-key-events
                <div
                  key={`${section.heading}:${item.id}`}
                  id={active ? `command-${item.id}` : undefined}
                  role="option"
                  aria-selected={active}
                  tabIndex={-1}
                  data-index={itemIndex}
                  onMouseMove={() => !active && setActiveIndex(itemIndex)}
                  onClick={() => run(item)}
                  className={cn(
                    "flex h-10 cursor-default items-center gap-3 rounded-md px-2.5 text-sm",
                    active && "bg-accent text-accent-foreground"
                  )}
                >
                  {item.kind === "tool" ? (
                    <>
                      <CategoryIcon category={item.tool.category} />
                      <span className="truncate font-medium">
                        {item.tool.name}
                      </span>
                      <span className="hidden min-w-0 flex-1 truncate text-xs text-muted-foreground sm:block">
                        {item.tool.description}
                      </span>
                      <span className="ml-auto shrink-0 text-xs text-muted-foreground">
                        {getCategory(item.tool.category).name}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex size-5 items-center justify-center text-muted-foreground [&_svg]:size-3.5">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </>
                  )}
                  {active && (
                    <CornerDownLeft className="size-3.5 shrink-0 text-muted-foreground" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 border-t bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd> navigate
        </span>
        <span className="flex items-center gap-1">
          <Kbd>↵</Kbd> open
        </span>
        <span className="ml-auto">{TOOLS.length} tools</span>
      </div>
    </div>
  );
}
