export enum ToolCategory {
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
  path: string;
  category: ToolCategory;
};

export type GroupedTool = {
  name: string;
  category: ToolCategory;
  tools: Omit<Tool, "category">[];
};
