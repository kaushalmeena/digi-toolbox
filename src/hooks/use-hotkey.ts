"use client";

import { useEffect, useEffectEvent } from "react";

/**
 * Binds a keyboard shortcut like "mod+k" (⌘ on macOS, Ctrl elsewhere) for the
 * lifetime of the component. The handler always sees fresh props/state.
 */
export function useHotkey(
  combo: string,
  handler: (event: KeyboardEvent) => void
) {
  const onKey = useEffectEvent(handler);

  useEffect(() => {
    const parts = combo.toLowerCase().split("+");
    const key = parts.pop();
    const wantsMod = parts.includes("mod");
    const wantsShift = parts.includes("shift");

    const listener = (event: KeyboardEvent) => {
      const mod = event.metaKey || event.ctrlKey;
      if (
        event.key.toLowerCase() === key &&
        mod === wantsMod &&
        event.shiftKey === wantsShift
      ) {
        event.preventDefault();
        onKey(event);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [combo]);
}
