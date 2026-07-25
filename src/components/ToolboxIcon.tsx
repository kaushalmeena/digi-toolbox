import type { ImgHTMLAttributes } from "react";

/**
 * The app icon (`src/app/icon.svg`), for the places the brand mark appears
 * inside the UI. Next serves that file at `/icon.svg` — the same path
 * `public/manifest.json` points at — so this renders the real icon rather than
 * a second copy of its geometry.
 *
 * Being the full-colour icon it does not inherit `currentColor` the way a
 * Blueprint icon does, and it needs no light/dark variant.
 *
 * Decorative by default: every current use sits next to the "Digi-Toolbox"
 * wordmark, so an empty `alt` keeps it out of the accessibility tree.
 */
export default function ToolboxIcon({
  size = 16,
  alt = "",
  ...props
}: { size?: number } & ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src="/icon.svg"
      alt={alt}
      width={size}
      height={size}
      draggable={false}
      {...props}
    />
  );
}
