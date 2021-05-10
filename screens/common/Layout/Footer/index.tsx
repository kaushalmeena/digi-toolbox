import { Divider } from "@blueprintjs/core";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { toolBoxes } from "../../constants";
import {
  Container,
  MessageContainer,
  ToolBox,
  ToolCategory,
  ToolContainer
} from "./styles";

const Footer: FunctionComponent = () => {
  return (
    <Container>
      <ToolContainer>
        {toolBoxes.map((box) => (
          <ToolBox key={box.category}>
            <ToolCategory>{box.category}</ToolCategory>
            {box.tools.map((link) => (
              <Link key={link.url} href={link.url}>
                {link.name}
              </Link>
            ))}
          </ToolBox>
        ))}
      </ToolContainer>
      <Divider />
      <MessageContainer>Made with &#9829; in NextJS</MessageContainer>
    </Container>
  );
};

export default Footer;
