import type { ComponentType } from "react";

import type { ToolSlug } from "./registry";

type ToolModule = { default: ComponentType };

/**
 * Each tool's screen, imported on demand. Every screen is a client component
 * in its own chunk, so a tool page only ships the code (and libraries such as
 * yaml or papaparse) for the tool being viewed.
 */
const LOADERS: Record<ToolSlug, () => Promise<ToolModule>> = {
  "prettify-json": () => import("./json/prettify-json"),
  "minify-json": () => import("./json/minify-json"),
  "json-to-csv": () => import("./json/json-to-csv"),
  "json-to-xml": () => import("./json/json-to-xml"),
  "json-to-yaml": () => import("./json/json-to-yaml"),
  "csv-to-json": () => import("./csv/csv-to-json"),
  "csv-to-xml": () => import("./csv/csv-to-xml"),
  "csv-to-yaml": () => import("./csv/csv-to-yaml"),
  "prettify-xml": () => import("./xml/prettify-xml"),
  "minify-xml": () => import("./xml/minify-xml"),
  "xml-to-json": () => import("./xml/xml-to-json"),
  "xml-to-csv": () => import("./xml/xml-to-csv"),
  "xml-to-yaml": () => import("./xml/xml-to-yaml"),
  "yaml-to-json": () => import("./yaml/yaml-to-json"),
  "yaml-to-csv": () => import("./yaml/yaml-to-csv"),
  "yaml-to-xml": () => import("./yaml/yaml-to-xml"),
  "diff-checker": () => import("./text/diff-checker"),
  "extract-text-from-html": () => import("./text/extract-text-from-html"),
  "extract-text-from-xml": () => import("./text/extract-text-from-xml"),
  "base64-encode": () => import("./encoding/base64-encode"),
  "base64-decode": () => import("./encoding/base64-decode"),
  "url-encode": () => import("./encoding/url-encode"),
  "url-decode": () => import("./encoding/url-decode"),
  "html-encode": () => import("./encoding/html-encode"),
  "html-decode": () => import("./encoding/html-decode"),
  "slash-escape": () => import("./encoding/slash-escape"),
  "slash-unescape": () => import("./encoding/slash-unescape"),
  "text-to-hex": () => import("./encoding/text-to-hex"),
  "hex-to-text": () => import("./encoding/hex-to-text"),
  "jwt-decoder": () => import("./encoding/jwt-decoder"),
  "uuid-generator": () => import("./generators/uuid-generator"),
  "hash-generator": () => import("./generators/hash-generator"),
  "base-converter": () => import("./converters/base-converter"),
  "color-converter": () => import("./converters/color-converter"),
  "length-converter": () => import("./converters/length-converter"),
  "mass-converter": () => import("./converters/mass-converter"),
  "temperature-converter": () => import("./converters/temperature-converter"),
  "area-converter": () => import("./converters/area-converter"),
  "speed-converter": () => import("./converters/speed-converter"),
  "pressure-converter": () => import("./converters/pressure-converter"),
  "energy-converter": () => import("./converters/energy-converter"),
  "angle-converter": () => import("./converters/angle-converter"),
  "image-to-base64": () => import("./image/image-to-base64"),
  "base64-to-image": () => import("./image/base64-to-image"),
  "image-color-picker": () => import("./image/image-color-picker")
};

export function loadTool(slug: ToolSlug): Promise<ToolModule> {
  return LOADERS[slug]();
}
