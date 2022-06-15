import Link from "next/link";
import React from "react";
import { ToolBoxes } from "../../../../constants";
import { ToolCategory } from "../../../../types";
import { Container, ToolLink, ToolHeading, ToolContainer } from "./styles";

type ColumnSectionProps = {
  categories: ToolCategory[];
};

function ColumnSection({ categories }: ColumnSectionProps) {
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

export default ColumnSection;
