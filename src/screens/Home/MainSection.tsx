import { InputGroup, Card } from "@blueprintjs/core";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { Tool } from "@/types";
import styled from "styled-components";
import { ToolBoxes } from "@/constants/tools";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px 20px;
  gap: 15px;
`;

const StyledCard = styled(Card)`
  min-width: 222px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

const Tools = ToolBoxes.reduce<Tool[]>((arr, cur) => arr.concat(cur.tools), []);

export default function MainSection() {
  const [search, setSearch] = useState("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>(Tools);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search = event.target.value;
    const regexp = new RegExp(search, "i");
    const filteredTools = Tools.filter((tool) => regexp.test(tool.name));
    setSearch(search);
    setFilteredTools(filteredTools);
  };

  return (
    <Container>
      <InputGroup
        fill
        large
        type="search"
        leftIcon="search"
        value={search}
        onChange={handleInputChange}
      />
      <CardContainer>
        {filteredTools.map((tool) => (
          <Link key={tool.url} href={tool.url}>
            <StyledCard interactive elevation={2}>
              {tool.name}
            </StyledCard>
          </Link>
        ))}
      </CardContainer>
    </Container>
  );
}
