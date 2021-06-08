import {
  AnchorButton,
  Button,
  ButtonGroup,
  Divider,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { LogoContainer, LogoIcon, LogoText } from "./styles";

type HeaderProps = {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
};

const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  return (
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
            minimal
            title="Toggle dark mode"
            icon={props.darkMode ? "flash" : "moon"}
            onClick={props.handleDarkModeToggle}
          />
          <AnchorButton
            minimal
            title="Github repository"
            icon="git-repo"
            href="https://github.com/kaushalmeena/myapp-getthattool"
          />
        </ButtonGroup>
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
