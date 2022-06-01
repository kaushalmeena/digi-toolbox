export interface Theme {
  id: string;
  blueprintjsClass: string;
  gray: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
}

export interface ToolBox {
  category: string;
  tools: Tool[];
}

export interface Tool {
  name: string;
  url: string;
}

export interface SelectOption {
  label: string;
  value: string;
}
