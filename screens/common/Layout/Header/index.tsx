import {
  Button,
  ButtonGroup,
  Divider,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from "@blueprintjs/core";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { LogoContainer, LogoIcon, LogoText } from "../styles";

type HeaderProps = {
  darkMode: boolean;
  handleDarkModeChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
            icon="moon"
            active={props.darkMode}
            value="true"
            onClick={props.handleDarkModeChange}
          />
          <Button
            icon="flash"
            active={!props.darkMode}
            value="false"
            onClick={props.handleDarkModeChange}
          />
        </ButtonGroup>
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
