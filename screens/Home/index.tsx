import { Card, H1, H2, InputGroup } from "@blueprintjs/core";
import Link from "next/link";
import React, { Component, ReactNode } from "react";
import { Tools } from "../../constants";
import { ITool } from "../../interfaces";
import { TopContainer } from "../common/styles";
import { CardBody, CardContainer, MainContainer } from "./styles";

type HomeProps = {
  children?: ReactNode;
};

type HomeState = {
  query: string;
  tools: ITool[];
};

class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      query: "",
      tools: Tools
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value;
    this.setState({
      query: input,
      tools: Tools.filter(
        (tool) => tool.name.toLowerCase().indexOf(input.toLowerCase()) > -1
      )
    });
  };

  render(): JSX.Element {
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
            onChange={this.handleInputChange}
          />
          <CardContainer>
            {this.state.tools.map((tool) => (
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
