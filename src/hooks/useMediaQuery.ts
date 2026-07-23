import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  // Start false so server render and first client render agree (no `window`
  // access during render); the real value is read after mount.
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatch(mediaQuery.matches);
    handler();
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return match;
}
