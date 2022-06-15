import Link from "next/link";
import React from "react";
import { ToolBoxes } from "../../../../constants";
import {
  ColumnContainer,
  ToolLink,
  ToolCategory,
  ToolContainer
} from "./styles";

type ColumnSectionProps = {
  categories: string[];
};

function ColumnSection({ categories }: ColumnSectionProps) {
  const columnToolBoxes = ToolBoxes.filter((box) =>
    categories.includes(box.category)
  );
  return (
    <ColumnContainer>
      {columnToolBoxes.map((box) => (
        <ToolContainer key={box.category}>
          <ToolCategory>{box.category}</ToolCategory>
          {box.tools.map((link) => (
            <Link key={link.url} href={link.url}>
              <ToolLink>{link.name}</ToolLink>
            </Link>
          ))}
        </ToolContainer>
      ))}
    </ColumnContainer>
  );
}

export default ColumnSection;
