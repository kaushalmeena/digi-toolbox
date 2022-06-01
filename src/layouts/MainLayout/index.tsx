import React, { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../../constants";
import { fetchDarkMode, storeDarkMode } from "../../utils";
import Footer from "./Footer";
import Header from "./Header";
import { Main } from "./styles";

type MainLayoutProps = {
  children?: ReactNode;
};

type MainLayoutState = {
  darkMode: boolean;
};

class MainLayout extends Component<MainLayoutProps, MainLayoutState> {
  constructor(props: MainLayoutProps) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  componentDidMount(): void {
    const { darkMode } = this.state;
    const value = fetchDarkMode();
    if (value !== darkMode) {
      this.setState({ darkMode: value });
    }
  }

  handleDarkModeToggle = (): void => {
    const { darkMode } = this.state;
    const value = !darkMode;
    this.setState({ darkMode: value });
    storeDarkMode(value);
  };

  render() {
    const { children } = this.props;
    const { darkMode } = this.state;
    const theme = darkMode ? DarkTheme : LightTheme;
    return (
      <ThemeProvider theme={theme}>
        <div className={theme.blueprintjsClass}>
          <Header
            darkMode={darkMode}
            handleDarkModeToggle={this.handleDarkModeToggle}
          />
          <Main>{children}</Main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default MainLayout;
