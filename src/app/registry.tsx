"use client";

import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

type StyledComponentsRegistryProps = {
  children: ReactNode;
};

export default function StyledComponentsRegistry({
  children
}: StyledComponentsRegistryProps) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
