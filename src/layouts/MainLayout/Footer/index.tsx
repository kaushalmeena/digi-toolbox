import React from "react";
import { ToolCategory } from "../../../types";
import { FixedContainer } from "../styles";
import ColumnSection from "./ColumnSection";
import { Container, MainContainer } from "./styles";

function Footer() {
  return (
    <Container>
      <FixedContainer>
        <MainContainer>
          <ColumnSection categories={[ToolCategory.JSON, ToolCategory.CSV]} />
          <ColumnSection categories={[ToolCategory.YAML, ToolCategory.XML]} />
          <ColumnSection categories={[ToolCategory.TEXT]} />
          <ColumnSection categories={[ToolCategory.CONVERTER]} />
          <ColumnSection categories={[ToolCategory.OTHER]} />
        </MainContainer>
      </FixedContainer>
    </Container>
  );
}

export default Footer;
