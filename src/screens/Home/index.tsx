import { Card, H1, H2, InputGroup } from "@blueprintjs/core";
import Link from "next/link";
import React, { Component } from "react";
import { ToolBoxes } from "../../constants";
import { ITool } from "../../interfaces";
import { TopContainer } from "../../styles";
import { CardBody, CardContainer, MainContainer } from "./styles";

type HomeProps = {};

type HomeState = {
  search: string;
  tools: ITool[];
  filteredTools: ITool[];
};

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    const tools = ToolBoxes.reduce((acc, cur) => acc.concat(cur.tools), []);
    this.state = {
      search: "",
      tools,
      filteredTools: tools
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { tools } = this.state;
    const query = event.target.value.toLowerCase();
    const filteredTools = tools.filter((tool) =>
      tool.name.toLowerCase().includes(query)
    );
    this.setState({ search: query, filteredTools });
  };

  render() {
    const { search, filteredTools } = this.state;
    return (
      <>
        <TopContainer>
          <H1>Every tool you could want at one place</H1>
          <H2>Every tool you need to use, at your fingertips!</H2>
        </TopContainer>
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
      </>
    );
  }
}

export default Home;
