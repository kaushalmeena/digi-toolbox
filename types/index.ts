export interface ITool {
  name: string;
  category: string;
  url: string;
}

export interface ISecondaryInputs {
  [name: string]: string;
}

export interface ISelectOptions {
  label: string;
  value: string;
}

export interface IOption {
  name: string;
  label: string;
  helperText?: string;
  inline?: boolean;
  type: "INPUT" | "SELECT";
  options?: ISelectOptions[];
  placeholder?: string;
}
