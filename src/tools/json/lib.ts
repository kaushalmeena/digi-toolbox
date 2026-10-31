import { unparse } from "papaparse";
import { json2xml } from "xml-js";
import { stringify } from "yaml";

export type Indent = "2" | "4" | "tab";

export function prettifyJSON(input: string, indent: Indent = "2"): string {
  const space = indent === "tab" ? "\t" : Number(indent);
  return JSON.stringify(JSON.parse(input), null, space);
}

export function minifyJSON(input: string): string {
  return JSON.stringify(JSON.parse(input));
}

export function convertJSONToCSV(input: string): string {
  const data = JSON.parse(input);
  if (!Array.isArray(data)) {
    throw new Error('Expected a JSON array of objects, e.g. [{ "a": 1 }]');
  }
  return unparse(data);
}

export function convertJSONToXML(input: string): string {
  // Parse first so invalid JSON fails with JSON.parse's precise message.
  return json2xml(JSON.stringify(JSON.parse(input)), {
    compact: true,
    spaces: 2
  });
}

export function convertJSONToYAML(input: string): string {
  return stringify(JSON.parse(input));
}

type Primitive = "string" | "number" | "boolean" | "null";

/**
 * Everything a JSON value at one position was seen to be: primitive kinds,
 * at most one (merged) object shape and at most one array whose element
 * shape merges every element. An empty shape renders as `unknown`.
 */
type Shape = {
  primitives: Set<Primitive>;
  object: ObjectShape | null;
  array: Shape | null;
};

type ObjectShape = {
  fields: Map<string, { shape: Shape; count: number }>;
  /** How many objects were merged, to tell which fields are optional. */
  samples: number;
};

function emptyShape(): Shape {
  return { primitives: new Set(), object: null, array: null };
}

function inferShape(value: unknown): Shape {
  const shape = emptyShape();
  if (value === null) {
    shape.primitives.add("null");
  } else if (Array.isArray(value)) {
    shape.array = value.map(inferShape).reduce(mergeShapes, emptyShape());
  } else if (typeof value === "object") {
    const fields: ObjectShape["fields"] = new Map();
    for (const [key, field] of Object.entries(value)) {
      fields.set(key, { shape: inferShape(field), count: 1 });
    }
    shape.object = { fields, samples: 1 };
  } else {
    shape.primitives.add(typeof value as Primitive);
  }
  return shape;
}

function mergeObjects(a: ObjectShape, b: ObjectShape): ObjectShape {
  const fields: ObjectShape["fields"] = new Map(a.fields);
  for (const [key, field] of b.fields) {
    const existing = fields.get(key);
    fields.set(
      key,
      existing
        ? {
            shape: mergeShapes(existing.shape, field.shape),
            count: existing.count + field.count
          }
        : field
    );
  }
  return { fields, samples: a.samples + b.samples };
}

function mergeShapes(a: Shape, b: Shape): Shape {
  return {
    primitives: new Set([...a.primitives, ...b.primitives]),
    object:
      a.object && b.object
        ? mergeObjects(a.object, b.object)
        : (a.object ?? b.object),
    array:
      a.array && b.array ? mergeShapes(a.array, b.array) : (a.array ?? b.array)
  };
}

const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

function toTypeName(text: string): string {
  const name = (text.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? [])
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join("");
  return /^\d/.test(name) ? `T${name}` : name;
}

/** Naive English singular for naming array elements ("users" → "User"). */
function singularize(name: string): string {
  if (/[^aeiou]ies$/i.test(name)) {
    return `${name.slice(0, -3)}y`;
  }
  if (/(ss|x|ch|sh|us)es$/i.test(name)) {
    return name.slice(0, -2);
  }
  if (/[^sui]s$/i.test(name)) {
    return name.slice(0, -1);
  }
  return `${name}Item`;
}

type RenderContext = {
  declaration: "interface" | "type";
  used: Set<string>;
  declarations: string[];
};

function uniqueName(base: string, context: RenderContext): string {
  let name = base;
  for (let suffix = 2; context.used.has(name); suffix += 1) {
    name = `${base}${suffix}`;
  }
  context.used.add(name);
  return name;
}

function declareObject(
  object: ObjectShape,
  name: string,
  context: RenderContext
): void {
  // Reserve the slot first so a parent is declared before its children.
  const slot = context.declarations.push("") - 1;
  const lines = [...object.fields].map(([key, field]) => {
    const property = IDENTIFIER.test(key) ? key : JSON.stringify(key);
    const optional = field.count < object.samples ? "?" : "";
    const type = renderShape(field.shape, toTypeName(key) || "Field", context);
    return `  ${property}${optional}: ${type};`;
  });
  const body = `{\n${lines.join("\n")}\n}`;
  context.declarations[slot] =
    context.declaration === "interface"
      ? `export interface ${name} ${body}`
      : `export type ${name} = ${body};`;
}

function renderShape(
  shape: Shape,
  nameHint: string,
  context: RenderContext
): string {
  const types: string[] = [];
  for (const primitive of ["string", "number", "boolean"] as const) {
    if (shape.primitives.has(primitive)) {
      types.push(primitive);
    }
  }
  if (shape.object) {
    if (shape.object.fields.size === 0) {
      types.push("Record<string, unknown>");
    } else {
      const name = uniqueName(nameHint, context);
      declareObject(shape.object, name, context);
      types.push(name);
    }
  }
  if (shape.array) {
    const element = renderShape(shape.array, singularize(nameHint), context);
    types.push(/[|]/.test(element) ? `(${element})[]` : `${element}[]`);
  }
  if (shape.primitives.has("null")) {
    types.push("null");
  }
  return types.length > 0 ? types.join(" | ") : "unknown";
}

export type TypeScriptOptions = {
  rootName?: string;
  declaration?: "interface" | "type";
};

/**
 * Infers TypeScript declarations from a JSON sample. Nested objects become
 * their own named declarations; objects inside arrays are merged, and keys
 * missing from some of them are marked optional.
 */
export function convertJSONToTypeScript(
  input: string,
  { rootName = "Root", declaration = "interface" }: TypeScriptOptions = {}
): string {
  const shape = inferShape(JSON.parse(input));
  const name = toTypeName(rootName) || "Root";
  const context: RenderContext = {
    declaration,
    used: new Set(),
    declarations: []
  };
  if (shape.object && shape.object.fields.size > 0) {
    context.used.add(name);
    declareObject(shape.object, name, context);
  } else {
    const slot = context.declarations.push("") - 1;
    context.used.add(name);
    context.declarations[slot] =
      `export type ${name} = ${renderShape(shape, name, context)};`;
  }
  return `${context.declarations.join("\n\n")}\n`;
}
