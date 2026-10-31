"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

const THEMES = [
  { value: "light", label: "Light", icon: Sun },
  { value: "system", label: "System", icon: Monitor },
  { value: "dark", label: "Dark", icon: Moon }
] as const;

const noopSubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

type ThemeValue = (typeof THEMES)[number]["value"];

function ThemeOption({
  theme,
  selected,
  onSelect
}: {
  theme: (typeof THEMES)[number];
  selected: boolean;
  onSelect: (value: ThemeValue) => void;
}) {
  const { value, label, icon: Icon } = theme;
  const handleClick = () => onSelect(value);

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-label={label}
      title={label}
      onClick={handleClick}
      className={cn(
        "flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
        selected && "bg-background text-foreground shadow-xs"
      )}
    >
      <Icon className="size-3.5" />
    </button>
  );
}

/** Segmented light / system / dark control, as in native app preferences. */
export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  // The stored theme is only known on the client; render neutral until then.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-lg bg-sidebar-accent/70 p-0.5",
        className
      )}
    >
      {THEMES.map((option) => (
        <ThemeOption
          key={option.value}
          theme={option}
          selected={mounted && theme === option.value}
          onSelect={setTheme}
        />
      ))}
    </div>
  );
}
