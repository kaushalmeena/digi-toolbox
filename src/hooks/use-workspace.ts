"use client";

import { useCallback, useSyncExternalStore } from "react";

import { getTool, type ToolSlug } from "@/tools/registry";

/**
 * Per-browser workspace state — pinned tools and recently opened tools —
 * shared by the sidebar, home page and command menu. Backed by localStorage
 * and exposed through useSyncExternalStore so every subscriber stays in sync
 * (including across tabs) without a context provider.
 */
type Workspace = { favorites: ToolSlug[]; recents: ToolSlug[] };

const STORAGE_KEY = "dtb:workspace:v1";
const MAX_RECENTS = 6;
const EMPTY: Workspace = { favorites: [], recents: [] };

const listeners = new Set<() => void>();
let cache: Workspace | null = null;

function sanitize(slugs: unknown): ToolSlug[] {
  return Array.isArray(slugs)
    ? slugs.filter((slug): slug is ToolSlug => !!getTool(String(slug)))
    : [];
}

function read(): Workspace {
  if (cache) {
    return cache;
  }
  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
    cache = {
      favorites: sanitize(parsed.favorites),
      recents: sanitize(parsed.recents)
    };
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(next: Workspace) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Keep the in-memory state even if it can't be persisted.
  }
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useWorkspace() {
  const workspace = useSyncExternalStore(subscribe, read, () => EMPTY);

  const toggleFavorite = useCallback((slug: ToolSlug) => {
    const { favorites, recents } = read();
    write({
      recents,
      favorites: favorites.includes(slug)
        ? favorites.filter((item) => item !== slug)
        : [...favorites, slug]
    });
  }, []);

  const recordVisit = useCallback((slug: ToolSlug) => {
    const { favorites, recents } = read();
    if (recents[0] === slug) {
      return;
    }
    write({
      favorites,
      recents: [slug, ...recents.filter((item) => item !== slug)].slice(
        0,
        MAX_RECENTS
      )
    });
  }, []);

  return { ...workspace, toggleFavorite, recordVisit };
}
