"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useSyncExternalStore } from "react";

import { decodeBase64, encodeBase64 } from "@/lib/base64";

const SHARE_PARAM = "i";
const MAX_SHARE_URL_LENGTH = 8000;

/*
 * A tiny external store over localStorage, keyed per tool. An in-memory copy
 * backs it so the input still works when storage is unavailable (private
 * mode, quota), and subscribers re-render on every write.
 */
const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function storageKey(pathname: string) {
  return `dtb:input:${pathname}`;
}

function readValue(key: string): string {
  if (memory.has(key)) {
    return memory.get(key) ?? "";
  }
  try {
    const stored = window.localStorage.getItem(key) ?? "";
    memory.set(key, stored);
    return stored;
  } catch {
    return "";
  }
}

function writeValue(key: string, value: string) {
  memory.set(key, value);
  try {
    if (value) {
      window.localStorage.setItem(key, value);
    } else {
      window.localStorage.removeItem(key);
    }
  } catch {
    // Keep the in-memory value when storage is unavailable.
  }
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Tool input that survives a reload and can be restored from a shared link
 * (`?i=<base64>`, which takes precedence over the saved value).
 */
export function usePersistedInput() {
  const key = storageKey(usePathname());
  const input = useSyncExternalStore(
    subscribe,
    () => readValue(key),
    () => ""
  );

  useEffect(() => {
    const shared = new URLSearchParams(window.location.search).get(SHARE_PARAM);
    if (!shared) {
      return;
    }
    try {
      writeValue(key, decodeBase64(shared));
    } catch {
      // A corrupted link just falls back to the saved input.
    }
  }, [key]);

  const setInput = useCallback(
    (value: string) => writeValue(key, value),
    [key]
  );

  /** A link that reopens this tool with the current input, or null if too long. */
  const buildShareUrl = useCallback((): string | null => {
    const url = new URL(window.location.href);
    url.search = input
      ? `${SHARE_PARAM}=${encodeURIComponent(encodeBase64(input))}`
      : "";
    const href = url.toString();
    return href.length > MAX_SHARE_URL_LENGTH ? null : href;
  }, [input]);

  return { input, setInput, buildShareUrl };
}

/** Seeds another tool's input, e.g. right before navigating to it. */
export function seedPersistedInput(pathname: string, value: string) {
  writeValue(storageKey(pathname), value);
}
