import {
  Binary,
  Braces,
  Calculator,
  CodeXml,
  Dices,
  FileCode2,
  Image,
  type LucideIcon,
  Sheet,
  Type
} from "lucide-react";

export type CategoryId =
  | "json"
  | "csv"
  | "xml"
  | "yaml"
  | "text"
  | "encoding"
  | "generators"
  | "converters"
  | "image";

export type Category = {
  id: CategoryId;
  name: string;
  icon: LucideIcon;
  /** Tailwind classes for the category's icon tile (tinted bg + fg). */
  tint: string;
};

export const CATEGORIES: readonly Category[] = [
  {
    id: "json",
    name: "JSON",
    icon: Braces,
    tint: "bg-amber-500/12 text-amber-600 dark:text-amber-400"
  },
  {
    id: "csv",
    name: "CSV",
    icon: Sheet,
    tint: "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400"
  },
  {
    id: "xml",
    name: "XML",
    icon: CodeXml,
    tint: "bg-orange-500/12 text-orange-600 dark:text-orange-400"
  },
  {
    id: "yaml",
    name: "YAML",
    icon: FileCode2,
    tint: "bg-rose-500/12 text-rose-600 dark:text-rose-400"
  },
  {
    id: "text",
    name: "Text",
    icon: Type,
    tint: "bg-sky-500/12 text-sky-600 dark:text-sky-400"
  },
  {
    id: "encoding",
    name: "Encoding",
    icon: Binary,
    tint: "bg-violet-500/12 text-violet-600 dark:text-violet-400"
  },
  {
    id: "generators",
    name: "Generators",
    icon: Dices,
    tint: "bg-fuchsia-500/12 text-fuchsia-600 dark:text-fuchsia-400"
  },
  {
    id: "converters",
    name: "Converters",
    icon: Calculator,
    tint: "bg-teal-500/12 text-teal-600 dark:text-teal-400"
  },
  {
    id: "image",
    name: "Image",
    icon: Image,
    tint: "bg-indigo-500/12 text-indigo-600 dark:text-indigo-400"
  }
];

type ToolDefinition = {
  slug: string;
  name: string;
  description: string;
  category: CategoryId;
  /** Extra search terms that don't appear in the name. */
  keywords?: readonly string[];
  /** Slug of the inverse tool, offered as a one-click "swap direction". */
  inverse?: string;
  isNew?: boolean;
};

/**
 * Every tool, in sidebar order. Routing (`/[tool]`), navigation, search, the
 * sitemap and page metadata are all derived from this list, so adding a tool
 * means one entry here plus its screen in `loaders.ts`.
 */
export const TOOLS = [
  // JSON
  {
    slug: "prettify-json",
    name: "Prettify JSON",
    description: "Format and indent JSON so it's easy to read.",
    category: "json",
    keywords: ["format", "beautify", "pretty", "validate", "lint"]
  },
  {
    slug: "minify-json",
    name: "Minify JSON",
    description: "Strip whitespace from JSON to make it as small as possible.",
    category: "json",
    keywords: ["compress", "compact"]
  },
  {
    slug: "json-to-csv",
    name: "JSON to CSV",
    description: "Convert a JSON array of objects into CSV rows.",
    category: "json",
    inverse: "csv-to-json"
  },
  {
    slug: "json-to-xml",
    name: "JSON to XML",
    description: "Convert a JSON document into XML markup.",
    category: "json",
    inverse: "xml-to-json"
  },
  {
    slug: "json-to-yaml",
    name: "JSON to YAML",
    description: "Convert a JSON document into YAML.",
    category: "json",
    inverse: "yaml-to-json"
  },
  {
    slug: "json-to-typescript",
    name: "JSON to TypeScript",
    description: "Generate TypeScript type definitions from a JSON sample.",
    category: "json",
    keywords: ["types", "interface", "ts", "schema"],
    isNew: true
  },
  // CSV
  {
    slug: "csv-to-json",
    name: "CSV to JSON",
    description: "Convert CSV rows into a JSON array of objects.",
    category: "csv",
    inverse: "json-to-csv"
  },
  {
    slug: "csv-to-xml",
    name: "CSV to XML",
    description: "Convert CSV rows into XML markup.",
    category: "csv",
    inverse: "xml-to-csv"
  },
  {
    slug: "csv-to-yaml",
    name: "CSV to YAML",
    description: "Convert CSV rows into a YAML list.",
    category: "csv",
    inverse: "yaml-to-csv"
  },
  // XML
  {
    slug: "prettify-xml",
    name: "Prettify XML",
    description: "Format and indent XML so it's easy to read.",
    category: "xml",
    keywords: ["format", "beautify", "pretty"]
  },
  {
    slug: "minify-xml",
    name: "Minify XML",
    description: "Strip whitespace from XML to make it as small as possible.",
    category: "xml",
    keywords: ["compress", "compact"]
  },
  {
    slug: "xml-to-json",
    name: "XML to JSON",
    description: "Convert XML markup into a JSON document.",
    category: "xml",
    inverse: "json-to-xml"
  },
  {
    slug: "xml-to-csv",
    name: "XML to CSV",
    description: "Convert XML records into CSV rows.",
    category: "xml",
    inverse: "csv-to-xml"
  },
  {
    slug: "xml-to-yaml",
    name: "XML to YAML",
    description: "Convert XML markup into YAML.",
    category: "xml",
    inverse: "yaml-to-xml"
  },
  // YAML
  {
    slug: "yaml-to-json",
    name: "YAML to JSON",
    description: "Convert a YAML document into JSON.",
    category: "yaml",
    inverse: "json-to-yaml"
  },
  {
    slug: "yaml-to-csv",
    name: "YAML to CSV",
    description: "Convert a YAML list into CSV rows.",
    category: "yaml",
    inverse: "csv-to-yaml"
  },
  {
    slug: "yaml-to-xml",
    name: "YAML to XML",
    description: "Convert a YAML document into XML markup.",
    category: "yaml",
    inverse: "xml-to-yaml"
  },
  // Text
  {
    slug: "diff-checker",
    name: "Diff Checker",
    description: "Compare two pieces of text and highlight what changed.",
    category: "text",
    keywords: ["compare", "difference", "changes"]
  },
  {
    slug: "regex-tester",
    name: "Regex Tester",
    description: "Test a regular expression and inspect every match and group.",
    category: "text",
    keywords: ["regexp", "regular expression", "match", "pattern"],
    isNew: true
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    description: "Convert text to camelCase, snake_case, kebab-case and more.",
    category: "text",
    keywords: ["camel", "snake", "kebab", "pascal", "upper", "lower", "title"],
    isNew: true
  },
  {
    slug: "text-statistics",
    name: "Text Statistics",
    description: "Count characters, words, lines and estimate reading time.",
    category: "text",
    keywords: ["word count", "character count", "length", "counter"],
    isNew: true
  },
  {
    slug: "line-tools",
    name: "Sort & Dedupe Lines",
    description: "Sort, deduplicate, trim, reverse and clean up lines of text.",
    category: "text",
    keywords: ["sort", "unique", "dedupe", "lines", "reverse", "shuffle"],
    isNew: true
  },
  {
    slug: "extract-text-from-html",
    name: "Extract Text from HTML",
    description: "Strip tags and keep only the text content of HTML.",
    category: "text",
    keywords: ["strip tags"]
  },
  {
    slug: "extract-text-from-xml",
    name: "Extract Text from XML",
    description: "Strip tags and keep only the text content of XML.",
    category: "text",
    keywords: ["strip tags"]
  },
  // Encoding
  {
    slug: "base64-encode",
    name: "Base64 Encode",
    description: "Encode text as Base64.",
    category: "encoding",
    inverse: "base64-decode"
  },
  {
    slug: "base64-decode",
    name: "Base64 Decode",
    description: "Decode Base64 back into text.",
    category: "encoding",
    inverse: "base64-encode"
  },
  {
    slug: "url-encode",
    name: "URL Encode",
    description: "Percent-encode text so it's safe inside a URL.",
    category: "encoding",
    keywords: ["percent", "escape", "uri"],
    inverse: "url-decode"
  },
  {
    slug: "url-decode",
    name: "URL Decode",
    description: "Decode percent-encoded URL text.",
    category: "encoding",
    keywords: ["percent", "unescape", "uri"],
    inverse: "url-encode"
  },
  {
    slug: "url-parser",
    name: "URL Parser",
    description:
      "Break a URL into protocol, host, path, query params and hash.",
    category: "encoding",
    keywords: ["query string", "params", "uri", "link"],
    isNew: true
  },
  {
    slug: "html-encode",
    name: "HTML Encode",
    description: "Escape characters as HTML entities.",
    category: "encoding",
    keywords: ["entities", "escape"],
    inverse: "html-decode"
  },
  {
    slug: "html-decode",
    name: "HTML Decode",
    description: "Turn HTML entities back into plain characters.",
    category: "encoding",
    keywords: ["entities", "unescape"],
    inverse: "html-encode"
  },
  {
    slug: "slash-escape",
    name: "Slash Escape",
    description: "Backslash-escape quotes, slashes and control characters.",
    category: "encoding",
    keywords: ["backslash", "string literal"],
    inverse: "slash-unescape"
  },
  {
    slug: "slash-unescape",
    name: "Slash Unescape",
    description: "Remove backslash escapes from a string.",
    category: "encoding",
    keywords: ["backslash", "string literal"],
    inverse: "slash-escape"
  },
  {
    slug: "text-to-hex",
    name: "Text to Hex",
    description: "Convert text into hexadecimal code units.",
    category: "encoding",
    inverse: "hex-to-text"
  },
  {
    slug: "hex-to-text",
    name: "Hex to Text",
    description: "Convert hexadecimal code units back into text.",
    category: "encoding",
    inverse: "text-to-hex"
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode a JSON Web Token's header and payload.",
    category: "encoding",
    keywords: ["json web token", "auth", "bearer"]
  },
  // Generators
  {
    slug: "uuid-generator",
    name: "UUID Generator",
    description: "Generate random version 4 UUIDs in bulk.",
    category: "generators",
    keywords: ["guid", "unique id", "random"]
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    description: "Compute SHA-1, SHA-256, SHA-384 and SHA-512 digests.",
    category: "generators",
    keywords: ["sha", "sha256", "digest", "checksum"]
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    description: "Generate strong random passwords with the rules you need.",
    category: "generators",
    keywords: ["random", "secure", "secret", "passphrase"],
    isNew: true
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder paragraphs, sentences or words.",
    category: "generators",
    keywords: ["placeholder", "dummy text", "filler"],
    isNew: true
  },
  // Converters
  {
    slug: "unix-timestamp-converter",
    name: "Unix Timestamp Converter",
    description: "Convert between Unix timestamps and human-readable dates.",
    category: "converters",
    keywords: ["epoch", "date", "time", "iso 8601"],
    isNew: true
  },
  {
    slug: "base-converter",
    name: "Number Base Converter",
    description: "Convert numbers between binary, octal, decimal and hex.",
    category: "converters",
    keywords: ["binary", "hex", "octal", "radix"]
  },
  {
    slug: "color-converter",
    name: "Color Converter",
    description: "Convert colors between HEX, RGB and HSL.",
    category: "converters",
    keywords: ["hex", "rgb", "hsl", "colour"]
  },
  {
    slug: "data-size-converter",
    name: "Data Size Converter",
    description: "Convert between bytes, kilobytes, mebibytes and more.",
    category: "converters",
    keywords: ["bytes", "kb", "mb", "gb", "storage"],
    isNew: true
  },
  {
    slug: "time-converter",
    name: "Time Converter",
    description:
      "Convert durations between milliseconds, hours, days and more.",
    category: "converters",
    keywords: ["duration", "seconds", "minutes"],
    isNew: true
  },
  {
    slug: "length-converter",
    name: "Length Converter",
    description: "Convert between kilometers, miles, feet, inches and more.",
    category: "converters"
  },
  {
    slug: "mass-converter",
    name: "Mass Converter",
    description: "Convert between kilograms, pounds, ounces and more.",
    category: "converters",
    keywords: ["weight"]
  },
  {
    slug: "temperature-converter",
    name: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit and Kelvin.",
    category: "converters"
  },
  {
    slug: "area-converter",
    name: "Area Converter",
    description: "Convert between square meters, acres, hectares and more.",
    category: "converters"
  },
  {
    slug: "speed-converter",
    name: "Speed Converter",
    description: "Convert between km/h, m/s, mph, knots and more.",
    category: "converters",
    keywords: ["velocity"]
  },
  {
    slug: "pressure-converter",
    name: "Pressure Converter",
    description: "Convert between bar, pascal, psi, atmospheres and more.",
    category: "converters"
  },
  {
    slug: "energy-converter",
    name: "Energy Converter",
    description: "Convert between joules, calories, kWh and more.",
    category: "converters"
  },
  {
    slug: "angle-converter",
    name: "Angle Converter",
    description: "Convert between degrees, radians, gradians and more.",
    category: "converters"
  },
  // Image
  {
    slug: "image-to-base64",
    name: "Image to Base64",
    description: "Encode an image as a Base64 data URL.",
    category: "image",
    keywords: ["data url", "data uri"],
    inverse: "base64-to-image"
  },
  {
    slug: "base64-to-image",
    name: "Base64 to Image",
    description: "Preview and download an image from a Base64 data URL.",
    category: "image",
    keywords: ["data url", "data uri"],
    inverse: "image-to-base64"
  },
  {
    slug: "image-color-picker",
    name: "Image Color Picker",
    description: "Pick any pixel's color from an image.",
    category: "image",
    keywords: ["eyedropper", "colour"]
  }
] as const satisfies readonly ToolDefinition[];

export type ToolSlug = (typeof TOOLS)[number]["slug"];

export type Tool = ToolDefinition & { slug: ToolSlug; inverse?: ToolSlug };

const TOOLS_BY_SLUG = new Map<string, Tool>(
  TOOLS.map((tool) => [tool.slug, tool])
);

const CATEGORIES_BY_ID = new Map(
  CATEGORIES.map((category) => [category.id, category])
);

export function getTool(slug: string): Tool | undefined {
  return TOOLS_BY_SLUG.get(slug);
}

export function getCategory(id: CategoryId): Category {
  // Every CategoryId has an entry, so this lookup can't miss.
  return CATEGORIES_BY_ID.get(id) as Category;
}

export function toolHref(slug: string) {
  return `/${slug}`;
}

/** Tools grouped under their category, in sidebar order. */
export const TOOL_GROUPS: readonly { category: Category; tools: Tool[] }[] =
  CATEGORIES.map((category) => ({
    category,
    tools: TOOLS.filter((tool) => tool.category === category.id)
  }));
