import { MaybeElement, IconName } from "@blueprintjs/core";

export type Theme = {
  id: string;
  blueprintjsClass: string;
  gray: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
};

export type ToolBox = {
  category: string;
  tools: Tool[];
};

export type Tool = {
  name: string;
  url: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type ButtonOption = {
  title: string;
  icon: IconName | MaybeElement;
  onClick: () => void;
};
