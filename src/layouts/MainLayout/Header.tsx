import { useMediaQuery } from "@/hooks";
import {
  AnchorButton,
  Button,
  ButtonGroup,
  Divider,
  InputGroup,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import { Flash, GitRepo, Moon, Search, Wrench } from "@blueprintjs/icons";
import Link from "next/link";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  padding: 0px;
  box-shadow:
    0px 0px 0px 1px #10161a33,
    0px 0px 0px #10161a00,
    0px 1px 1px #10161a33 !important;
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

const LogoText = styled.span`
  margin-left: 5px;
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
              <Wrench size={18} />
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
                placeholder="Search tools..."
                leftIcon={<Search />}
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
                icon={<Search />}
                onClick={openOmnibarSearch}
              />
            )}
            <Button
              minimal
              title="Toggle dark mode"
              icon={darkMode ? <Flash /> : <Moon />}
              onClick={toggleDarkMode}
            />
            <AnchorButton
              minimal
              title="Github repository"
              icon={<GitRepo />}
              href="https://github.com/kaushalmeena/myapp-getthattool"
            />
          </ButtonGroup>
        </NavbarGroup>
      </NavbarContainer>
    </StyledNavbar>
  );
}
