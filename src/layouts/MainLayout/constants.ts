import { Classes } from "@blueprintjs/core";
import { Theme } from "./types";

const CommonTheme = {
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};

export const DarkTheme: Theme = {
  ...CommonTheme,
  id: "dark-theme",
  className: Classes.DARK,
  right: "#2EA043",
  wrong: "#F85149",
  gray: {
    1: "#182026",
    2: "#202B33",
    3: "#293742",
    4: "#30404D",
    5: "#394B59"
  }
};

export const LightTheme: Theme = {
  ...CommonTheme,
  id: "light-theme",
  className: null,
  right: "#ABF2BC",
  wrong: "#FF8182",
  gray: {
    1: "#CED9E0",
    2: "#D8E1E8",
    3: "#E1E8ED",
    4: "#EBF1F5",
    5: "#F5F8FA"
  }
};
