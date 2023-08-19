import { Classes } from "@blueprintjs/core";
import { DefaultTheme } from "styled-components";

const CommonThemeProps = {
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};

export const DarkTheme: DefaultTheme = {
  ...CommonThemeProps,
  id: "dark-theme",
  className: Classes.DARK,
  colors: {
    right: "#2EA043",
    wrong: "#F85149",
    gray: {
      1: "#1C2127",
      2: "#252A31",
      3: "#2F343C",
      4: "#383E47",
      5: "#404854"
    }
  }
};

export const LightTheme: DefaultTheme = {
  ...CommonThemeProps,
  id: "light-theme",
  className: null,
  colors: {
    right: "#ABF2BC",
    wrong: "#FF8182",
    gray: {
      1: "#D3D8DE",
      2: "#DCE0E5",
      3: "#E5E8EB",
      4: "#EDEFF2",
      5: "#F6F7F9"
    }
  }
};