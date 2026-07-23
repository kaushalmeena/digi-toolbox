import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  decodeBase64ToString,
  encodeStringToBase64
} from "@/utils/stringUtils";

const SHARE_PARAM = "i";

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
  const storageKey = `dtb:input:${pathname}`;
  const [input, setInputState] = useState("");

  useEffect(() => {
    let initial = "";
    const shared = new URLSearchParams(window.location.search).get(SHARE_PARAM);
    if (shared) {
      try {
        initial = decodeBase64ToString(shared);
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
    url.search = input ? `${SHARE_PARAM}=${encodeStringToBase64(input)}` : "";
    return url.toString();
  }, [input]);

  return { input, setInput, buildShareUrl };
}
