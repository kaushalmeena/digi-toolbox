import {
  Button,
  ButtonGroup,
  Classes,
  Divider,
  Icon,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import React, { Component, ReactNode } from "react";
import { getTheme, setTheme } from "./utils";

type LayoutProps = {
  children?: ReactNode;
};

type LayoutState = {
  theme: string;
};

class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {
      theme: null
    };
  }

  componentDidMount(): void {
    const theme = getTheme();
    if (theme) {
      this.setState({
        theme
      });
    }
  }

  setDarkMode = (value: boolean): void => {
    const theme = value ? Classes.DARK : null;
    this.setState({
      theme
    });
    setTheme(theme);
  };

  render(): JSX.Element {
    const darkMode = this.state.theme === Classes.DARK;
    const darkClass = `.${Classes.DARK}`;

    return (
      <div className={this.state.theme}>
        <Navbar>
          <NavbarGroup>
            <NavbarHeading>
              <Icon icon="wrench" /> <strong>GetThatTool</strong>
            </NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align="right">
            <Divider />
            <ButtonGroup>
              <Button
                icon="moon"
                active={darkMode}
                onClick={() => this.setDarkMode(true)}
              />
              <Button
                icon="flash"
                active={!darkMode}
                onClick={() => this.setDarkMode(false)}
              />
            </ButtonGroup>
          </NavbarGroup>
        </Navbar>
        <main className="main">{this.props.children}</main>
        <footer className="footer">Made with &#9829; in NextJS</footer>
        <style jsx>{`
          .main {
            background-color: #f5f8fa;
            min-height: calc(100vh - 90px);
          }
          .footer {
            padding: 10px;
            text-align: center;
            font-size: 16px;
          }
          ${darkClass} .main {
            background-color: #30404d;
          }
          ${darkClass} .footer {
            background-color: #293742;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
