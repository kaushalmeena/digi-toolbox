import { Card, InputGroup } from "@blueprintjs/core";
import Link from "next/link";
import React, { Component } from "react";
import { ToolBoxes } from "../../../constants";
import { Tool } from "../../../types";
import { CardBody, CardContainer, MainContainer } from "../styles";

type HomeProps = {};

type HomeState = {
  search: string;
  tools: Tool[];
  filteredTools: Tool[];
};

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    const allTools = ToolBoxes.reduce((arr, cur) => arr.concat(cur.tools), []);
    this.state = {
      search: "",
      tools: allTools,
      filteredTools: allTools
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { tools } = this.state;
    const search = event.target.value;
    const query = search.toLowerCase();
    const filteredTools = tools.filter((tool) =>
      tool.name.toLowerCase().includes(query)
    );
    this.setState({ search, filteredTools });
  };

  render() {
    const { search, filteredTools } = this.state;
    return (
      <MainContainer>
        <InputGroup
          fill
          large
          leftIcon="search"
          value={search}
          onChange={this.handleInputChange}
        />
        <CardContainer>
          {filteredTools.map((tool) => (
            <Link key={tool.url} href={tool.url}>
              <Card interactive elevation={2}>
                <CardBody>{tool.name}</CardBody>
              </Card>
            </Link>
          ))}
        </CardContainer>
      </MainContainer>
    );
  }
}

export default Home;
