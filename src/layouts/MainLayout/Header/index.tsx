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
import React from "react";
import { ResponsiveContainer } from "../styles";
import { LogoContainer, LogoIcon, LogoText } from "./styles";

type HeaderProps = {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
};

function Header({ darkMode, handleDarkModeToggle }: HeaderProps) {
  return (
    <Navbar>
      <ResponsiveContainer>
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
              icon={darkMode ? "flash" : "moon"}
              onClick={handleDarkModeToggle}
            />
            <AnchorButton
              minimal
              title="Github repository"
              icon="git-repo"
              href="https://github.com/kaushalmeena/myapp-getthattool"
            />
          </ButtonGroup>
        </NavbarGroup>
      </ResponsiveContainer>
    </Navbar>
  );
}

export default Header;
