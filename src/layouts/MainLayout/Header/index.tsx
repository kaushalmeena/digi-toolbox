import {
  AnchorButton,
  Button,
  ButtonGroup,
  Divider,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import React from "react";
import { FixedContainer } from "../styles";
import {
  LogoContainer,
  StyledIcon,
  LogoText,
  NavbarContainer,
  StyledNavbar
} from "./styles";

type HeaderProps = {
  darkMode: boolean;
  handleDarkModeToggle: () => void;
};

function Header({ darkMode, handleDarkModeToggle }: HeaderProps) {
  return (
    <StyledNavbar>
      <FixedContainer>
        <NavbarContainer>
          <NavbarGroup>
            <NavbarHeading>
              <Link href="/">
                <LogoContainer>
                  <StyledIcon icon="wrench" iconSize={18} />
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
        </NavbarContainer>
      </FixedContainer>
    </StyledNavbar>
  );
}

export default Header;
