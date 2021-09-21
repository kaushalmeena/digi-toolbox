export interface ITheme {
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

export interface IToolBox {
  category: string;
  tools: ITool[];
}

export interface ITool {
  name: string;
  url: string;
}

export interface ISelectOption {
  label: string;
  value: string;
}
