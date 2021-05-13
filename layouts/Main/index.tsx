import React, { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../constants";
import { fetchDarkMode, storeDarkMode } from "../../utils";
import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./styles";

type LayoutProps = {
  children?: ReactNode;
};

type LayoutState = {
  darkMode: boolean;
};

class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  componentDidMount(): void {
    const value = fetchDarkMode();
    if (value !== this.state.darkMode) {
      this.setState({
        darkMode: value
      });
    }
  }

  handleDarkModeChange = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const buttonValue = event.currentTarget.value;
    const value = buttonValue === "true";
    if (value !== this.state.darkMode) {
      storeDarkMode(value);
      this.setState({
        darkMode: value
      });
    }
  };

  render(): JSX.Element {
    const theme = this.state.darkMode ? DarkTheme : LightTheme;
    return (
      <ThemeProvider theme={theme}>
        <div className={theme.blueprintjsClass}>
          <Header
            darkMode={this.state.darkMode}
            handleDarkModeChange={this.handleDarkModeChange}
          />
          <Main>{this.props.children}</Main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
