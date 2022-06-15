import { Icon, Navbar } from "@blueprintjs/core";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  padding: 0px;
`;

export const NavbarContainer = styled.div`
  padding: 0px 40px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.3;
  }
`;

export const StyledIcon = styled(Icon)`
  margin-right: 5px;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
