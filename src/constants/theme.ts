import { Classes, Colors } from "@blueprintjs/core";
import { DefaultTheme } from "styled-components";

export const COOKIE_DARK_MODE_KEY = "darkMode";

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
    right: Colors.GREEN3,
    wrong: Colors.RED3,
    gray: {
      1: Colors.DARK_GRAY1,
      2: Colors.DARK_GRAY2,
      3: Colors.DARK_GRAY3,
      4: Colors.DARK_GRAY4,
      5: Colors.DARK_GRAY5
    }
  }
};

export const LightTheme: DefaultTheme = {
  ...CommonThemeProps,
  id: "light-theme",
  className: null,
  colors: {
    right: Colors.GREEN5,
    wrong: Colors.RED5,
    gray: {
      1: Colors.LIGHT_GRAY1,
      2: Colors.LIGHT_GRAY2,
      3: Colors.LIGHT_GRAY3,
      4: Colors.LIGHT_GRAY4,
      5: Colors.LIGHT_GRAY5
    }
  }
};
