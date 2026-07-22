import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(Boolean(mediaQuery.matches));
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [mediaQuery]);

  return match;
}

const SHARE_PARAM = "i";

// Base64 that survives Unicode input (btoa only handles latin1).
function encodeShareValue(value: string): string {
  return window.btoa(unescape(encodeURIComponent(value)));
}

function decodeShareValue(value: string): string {
  return decodeURIComponent(escape(window.atob(value)));
}

/**
 * Tool input that survives a refresh and can be restored from a shared link.
 * On mount it hydrates from the `?i=` query param (a shared link) first, then
 * falls back to a per-tool localStorage entry. Subsequent updates are mirrored
 * to localStorage so the input persists across reloads.
 */
export function usePersistedInput(): {
  input: string;
  setInput: (value: string) => void;
  buildShareUrl: () => string;
} {
  const pathname = usePathname();
  const storageKey = `gtt:input:${pathname}`;
  const [input, setInputState] = useState("");

  useEffect(() => {
    let initial = "";
    const shared = new URLSearchParams(window.location.search).get(SHARE_PARAM);
    if (shared) {
      try {
        initial = decodeShareValue(shared);
      } catch {
        initial = "";
      }
    }
    if (!initial) {
      initial = window.localStorage.getItem(storageKey) ?? "";
    }
    if (initial) {
      setInputState(initial);
    }
  }, [storageKey]);

  const setInput = useCallback(
    (value: string) => {
      setInputState(value);
      try {
        if (value) {
          window.localStorage.setItem(storageKey, value);
        } else {
          window.localStorage.removeItem(storageKey);
        }
      } catch {
        // Ignore storage failures (private mode / quota).
      }
    },
    [storageKey]
  );

  const buildShareUrl = useCallback(() => {
    const url = new URL(window.location.href);
    url.search = input ? `${SHARE_PARAM}=${encodeShareValue(input)}` : "";
    return url.toString();
  }, [input]);

  return { input, setInput, buildShareUrl };
}
