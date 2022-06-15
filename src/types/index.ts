export type Tool = {
  name: string;
  url: string;
};

export type ToolBox = {
  category: string;
  tools: Tool[];
};

export type SelectOption = {
  label: string;
  value: string;
};
