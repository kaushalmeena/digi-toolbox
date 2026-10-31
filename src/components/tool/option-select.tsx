"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type Option<T extends string = string> = { value: T; label: string };

export function OptionSelect<T extends string>({
  value,
  options,
  onValueChange,
  label,
  size = "default",
  className
}: {
  value: T;
  options: readonly Option<T>[];
  onValueChange: (value: T) => void;
  /** Accessible name for the trigger. */
  label: string;
  /** Matches the Input heights: sm = toolbar, default = form, lg = hero input. */
  size?: "sm" | "default" | "lg";
  className?: string;
}) {
  const handleValueChange = (next: T | null) => {
    if (next !== null) {
      onValueChange(next);
    }
  };

  return (
    <Select items={options} value={value} onValueChange={handleValueChange}>
      <SelectTrigger size={size} aria-label={label} className={cn(className)}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false}>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
