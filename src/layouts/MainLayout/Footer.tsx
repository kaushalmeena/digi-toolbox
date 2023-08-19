import { ToolCategory } from "@/types";
import styled from "styled-components";
import ColumnSection from "./ColumnSection";

const Container = styled.footer`
  background-color: ${(props) => props.theme.colors.gray[3]};
`;

const MainContainer = styled.div`
  margin: 0px auto;
  max-width: 1400px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

export default function Footer() {
  return (
    <Container>
      <MainContainer>
        <ColumnSection categories={[ToolCategory.JSON, ToolCategory.CSV]} />
        <ColumnSection categories={[ToolCategory.YAML, ToolCategory.XML]} />
        <ColumnSection categories={[ToolCategory.TEXT]} />
        <ColumnSection categories={[ToolCategory.CONVERTER]} />
        <ColumnSection categories={[ToolCategory.OTHER]} />
      </MainContainer>
    </Container>
  );
}
