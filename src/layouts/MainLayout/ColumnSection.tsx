import { ToolBoxes } from "@/constants/tools";
import { ToolCategory } from "@/types";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    width: 100%;
    text-align: center;
  }
`;

const ToolHeading = styled.h3`
  font-size: 20px;
  font-weight: bold;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 24px;
  }
`;

const ToolLink = styled.span`
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 20px;
  }
`;

type ColumnSectionProps = {
  categories: ToolCategory[];
};

export default function ColumnSection({ categories }: ColumnSectionProps) {
  const columnToolBoxes = ToolBoxes.filter((toolBox) =>
    categories.includes(toolBox.category)
  );
  return (
    <Container>
      {columnToolBoxes.map((toolBox) => (
        <ToolContainer key={toolBox.category}>
          <ToolHeading>{toolBox.name}</ToolHeading>
          {toolBox.tools.map((tool) => (
            <Link key={tool.url} href={tool.url}>
              <ToolLink>{tool.name}</ToolLink>
            </Link>
          ))}
        </ToolContainer>
      ))}
    </Container>
  );
}
