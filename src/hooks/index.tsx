import { useEffect, useMemo, useState } from "react";

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
