import type { ComponentType } from "react";

import type { ToolSlug } from "./registry";

type ToolModule = { default: ComponentType };

/**
 * Each tool's screen, imported on demand. Every screen is a client component
 * in its own chunk, so a tool page only ships the code (and libraries such as
 * yaml or papaparse) for the tool being viewed.
 */
const LOADERS: Record<ToolSlug, () => Promise<ToolModule>> = {
  "prettify-json": () => import("./json/prettify"),
  "minify-json": () => import("./json/minify"),
  "json-to-csv": () => import("./json/to-csv"),
  "json-to-xml": () => import("./json/to-xml"),
  "json-to-yaml": () => import("./json/to-yaml"),
  "json-to-typescript": () => import("./json/to-typescript"),
  "csv-to-json": () => import("./csv/to-json"),
  "csv-to-xml": () => import("./csv/to-xml"),
  "csv-to-yaml": () => import("./csv/to-yaml"),
  "prettify-xml": () => import("./xml/prettify"),
  "minify-xml": () => import("./xml/minify"),
  "xml-to-json": () => import("./xml/to-json"),
  "xml-to-csv": () => import("./xml/to-csv"),
  "xml-to-yaml": () => import("./xml/to-yaml"),
  "yaml-to-json": () => import("./yaml/to-json"),
  "yaml-to-csv": () => import("./yaml/to-csv"),
  "yaml-to-xml": () => import("./yaml/to-xml"),
  "diff-checker": () => import("./text/diff"),
  "regex-tester": () => import("./text/regex"),
  "case-converter": () => import("./text/case"),
  "text-statistics": () => import("./text/statistics"),
  "line-tools": () => import("./text/lines"),
  "extract-text-from-html": () => import("./text/extract-html"),
  "extract-text-from-xml": () => import("./text/extract-xml"),
  "base64-encode": () => import("./encoding/base64-encode"),
  "base64-decode": () => import("./encoding/base64-decode"),
  "url-encode": () => import("./encoding/url-encode"),
  "url-decode": () => import("./encoding/url-decode"),
  "url-parser": () => import("./encoding/url-parser"),
  "html-encode": () => import("./encoding/html-encode"),
  "html-decode": () => import("./encoding/html-decode"),
  "slash-escape": () => import("./encoding/slash-escape"),
  "slash-unescape": () => import("./encoding/slash-unescape"),
  "text-to-hex": () => import("./encoding/text-to-hex"),
  "hex-to-text": () => import("./encoding/hex-to-text"),
  "jwt-decoder": () => import("./encoding/jwt-decode"),
  "uuid-generator": () => import("./generators/uuid"),
  "hash-generator": () => import("./generators/hash"),
  "password-generator": () => import("./generators/password"),
  "lorem-ipsum-generator": () => import("./generators/lorem-ipsum"),
  "unix-timestamp-converter": () => import("./converters/unix-timestamp"),
  "base-converter": () => import("./converters/number-base"),
  "color-converter": () => import("./converters/color"),
  "data-size-converter": () => import("./converters/data-size"),
  "time-converter": () => import("./converters/time"),
  "length-converter": () => import("./converters/length"),
  "mass-converter": () => import("./converters/mass"),
  "temperature-converter": () => import("./converters/temperature"),
  "area-converter": () => import("./converters/area"),
  "speed-converter": () => import("./converters/speed"),
  "pressure-converter": () => import("./converters/pressure"),
  "energy-converter": () => import("./converters/energy"),
  "angle-converter": () => import("./converters/angle"),
  "image-to-base64": () => import("./image/to-base64"),
  "base64-to-image": () => import("./image/from-base64"),
  "image-color-picker": () => import("./image/color-picker")
};

export function loadTool(slug: ToolSlug): Promise<ToolModule> {
  return LOADERS[slug]();
}
