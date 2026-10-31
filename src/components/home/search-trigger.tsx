"use client";

import { Search } from "lucide-react";

import { useOpenCommandMenu } from "@/components/layout/command-menu";
import { Kbd } from "@/components/ui/kbd";

export function SearchTrigger() {
  const openCommandMenu = useOpenCommandMenu();
  return (
    <button
      type="button"
      onClick={openCommandMenu}
      className="flex h-11 w-full max-w-xl items-center gap-3 rounded-xl border bg-card px-4 text-sm text-muted-foreground shadow-sm transition hover:border-primary/40 hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <Search className="size-4" />
      Search {""}
      <span className="max-sm:hidden">JSON, Base64, regex, timestamps…</span>
      <span className="ml-auto flex gap-1">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>
    </button>
  );
}
