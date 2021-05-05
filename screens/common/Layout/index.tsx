import {
  Button,
  ButtonGroup,
  Divider,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import React, { Component, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "../../../constants";
import Footer from "./Footer";
import { LogoContainer, LogoIcon, LogoText, Main } from "./styles";
import { fetchDarkMode, storeDarkMode } from "./utils";

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

  setDarkMode = (value: boolean): void => {
    if (value !== this.state.darkMode) {
      storeDarkMode(value);
      this.setState({
        darkMode: value
      });
    }
  };

  render(): JSX.Element {
    const theme = this.state.darkMode ? DARK_THEME : LIGHT_THEME;
    return (
      <ThemeProvider theme={theme}>
        <div className={theme.blueprintjsClass}>
          <Navbar>
            <NavbarGroup>
              <NavbarHeading>
                <Link href="/">
                  <LogoContainer>
                    <LogoIcon icon="wrench" iconSize={18} />
                    <LogoText>GetThatTool</LogoText>
                  </LogoContainer>
                </Link>
              </NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align="right">
              <Divider />
              <ButtonGroup>
                <Button
                  icon="moon"
                  active={this.state.darkMode}
                  onClick={() => this.setDarkMode(true)}
                />
                <Button
                  icon="flash"
                  active={!this.state.darkMode}
                  onClick={() => this.setDarkMode(false)}
                />
              </ButtonGroup>
            </NavbarGroup>
          </Navbar>
          <Main>{this.props.children}</Main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
