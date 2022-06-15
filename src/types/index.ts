export const enum ToolCategory {
  JSON,
  CSV,
  XML,
  YAML,
  TEXT,
  CONVERTER,
  OTHER
}

export type Tool = {
  name: string;
  url: string;
};

export type ToolBox = {
  category: ToolCategory;
  name: string;
  tools: Tool[];
};

export type SelectOption = {
  label: string;
  value: string;
};
