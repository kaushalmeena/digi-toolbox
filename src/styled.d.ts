import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string;
    className: string;
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
    };
    colors: {
      right: string;
      wrong: string;
      gray: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
    };
  }
}
