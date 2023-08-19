import {
  AnchorButton,
  Button,
  ButtonGroup,
  Divider,
  Icon,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  padding: 0px;
`;

const NavbarContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  width: 100%;
  padding: 0px 40px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.3;
    text-decoration: none;
  }
`;

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  return (
    <StyledNavbar>
      <NavbarContainer>
        <NavbarGroup>
          <NavbarHeading>
            <StyledLink href="/">
                <StyledIcon icon="wrench" size={18} />
                <LogoText>GetThatTool</LogoText>
            </StyledLink>
          </NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align="right">
          <Divider />
          <ButtonGroup>
            <Button
              minimal
              title="Toggle dark mode"
              icon={darkMode ? "flash" : "moon"}
              onClick={toggleDarkMode}
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
    </StyledNavbar>
  );
}