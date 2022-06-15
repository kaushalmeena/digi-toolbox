import React from "react";
import { ResponsiveContainer } from "../styles";
import ColumnSection from "./ColumnSection";
import { Container, MainContainer } from "./styles";

function Footer() {
  return (
    <Container>
      <ResponsiveContainer>
        <MainContainer>
          <ColumnSection categories={["JSON Tools", "CSV Tools"]} />
          <ColumnSection categories={["XML Tools", "YAML Tools"]} />
          <ColumnSection categories={["Text Tools"]} />
          <ColumnSection categories={["Converters"]} />
          <ColumnSection categories={["Other Tools"]} />
        </MainContainer>
      </ResponsiveContainer>
    </Container>
  );
}

export default Footer;
