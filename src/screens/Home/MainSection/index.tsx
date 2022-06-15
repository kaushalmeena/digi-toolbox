import { InputGroup } from "@blueprintjs/core";
import Link from "next/link";
import React, { Component } from "react";
import { ToolBoxes } from "../../../constants";
import { Tool } from "../../../types";
import { CardContainer, Container, StyledCard } from "./styles";

type MainSectionProps = {};

type MainSectionState = {
  search: string;
  tools: Tool[];
  filteredTools: Tool[];
};

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
    super(props);
    const tools = ToolBoxes.reduce((arr, cur) => arr.concat(cur.tools), []);
    this.state = {
      search: "",
      tools,
      filteredTools: tools
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { tools } = this.state;
    const search = event.target.value;
    const regexp = new RegExp(search, "i");
    const filteredTools = tools.filter((tool) => regexp.test(tool.name));
    this.setState({
      search,
      filteredTools
    });
  };

  render() {
    const { search, filteredTools } = this.state;
    return (
      <Container>
        <InputGroup
          fill
          large
          type="search"
          leftIcon="search"
          value={search}
          onChange={this.handleInputChange}
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
}

export default MainSection;
