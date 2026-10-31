import Link from "next/link";

import { cn } from "@/lib/utils";

export function BrandMark({ size = 22 }: { size?: number }) {
  return (
    <img
      src="/icon.svg"
      alt=""
      width={size}
      height={size}
      draggable={false}
      className="shrink-0"
    />
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 rounded-md text-sm font-semibold tracking-tight outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <BrandMark />
      Digi-Toolbox
    </Link>
  );
}
