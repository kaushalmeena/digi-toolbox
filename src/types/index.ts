export const enum ToolCategory {
  JSON = "JSON",
  CSV = "CSV",
  XML = "XML",
  YAML = "YAML",
  TEXT = "TEXT",
  CONVERTER = "CONVERTER",
  OTHER = "OTHER"
}

export type Tool = {
  name: string;
  url: string;
  category: ToolCategory;
};

export type GroupedTool = {
  name: string;
  category: ToolCategory;
  tools: Omit<Tool, "category">[];
};

export type SelectOption = {
  label: string;
  value: string;
};
