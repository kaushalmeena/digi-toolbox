import {
  Button,
  ButtonGroup,
  Divider,
  Icon,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import React, { Component, ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "../../constants/themes";
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
          <Footer>Made with &#9829; in NextJS</Footer>
        </div>
      </ThemeProvider>
    );
  }
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  & :hover {
    opacity: 0.3;
  }
`;

const LogoIcon = styled(Icon)`
  margin-right: 5px;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Main = styled.main`
  padding: 20px;
  background-color: ${(props) => props.theme.gray[4]};
  min-height: calc(100vh - 88px);
`;

const Footer = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: ${(props) => props.theme.gray[5]};
`;

export default Layout;
