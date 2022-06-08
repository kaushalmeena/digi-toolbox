import { IconName, MaybeElement } from "@blueprintjs/core";

export type ButtonOption = {
  title: string;
  icon: IconName | MaybeElement;
  onClick: () => void;
};
