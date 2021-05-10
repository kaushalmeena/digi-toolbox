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
