import { Divider } from "@blueprintjs/core";
import Link from "next/link";
import React from "react";
import { ToolBoxes } from "../../../constants";
import {
  Container,
  MessageContainer,
  BoxContainer,
  ToolCategory,
  MainContainer
} from "./styles";

function Footer() {
  return (
    <Container>
      <MainContainer>
        {ToolBoxes.map((box) => (
          <BoxContainer key={box.category}>
            <ToolCategory>{box.category}</ToolCategory>
            {box.tools.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.name}
              </Link>
            ))}
          </BoxContainer>
        ))}
      </MainContainer>
      <Divider />
      <MessageContainer>Made with &#9829; in NextJS</MessageContainer>
    </Container>
  );
}

export default Footer;
