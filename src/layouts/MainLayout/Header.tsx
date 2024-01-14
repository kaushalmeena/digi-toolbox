import { useMediaQuery } from "@/hooks";
import {
  AnchorButton,
  Button,
  ButtonGroup,
  Divider,
  Icon,
  InputGroup,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  padding: 0px;
  box-shadow:
    0 0 0 1px #10161a33,
    0 0 0 #10161a00,
    0 1px 1px #10161a33 !important;
`;

const NavbarContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  width: 100%;
  padding: 0px 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}px) {
    padding: 0px 40px;
  }
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
  openOmnibarSearch: () => void;
};

export default function Header({
  darkMode,
  toggleDarkMode,
  openOmnibarSearch
}: HeaderProps) {
  const showSearchInput = useMediaQuery("(min-width: 500px)");

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
          {showSearchInput && (
            <>
              <InputGroup
                readOnly
                type="search"
                leftIcon="search"
                placeholder="Search tools..."
                onClick={openOmnibarSearch}
              />
              <Divider />
            </>
          )}
          <ButtonGroup>
            {!showSearchInput && (
              <Button
                minimal
                title="Search tools"
                icon="search"
                onClick={openOmnibarSearch}
              />
            )}
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
