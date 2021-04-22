import { Card, H1, H3, InputGroup } from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import styled from "styled-components";
import { TOOLS } from "../../constants";
import { ITool } from "../../types";

type HomeProps = {
  router: NextRouter;
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
      tools: TOOLS
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    this.setState({
      query: input,
      tools: TOOLS.filter(
        (tool) => tool.name.toLowerCase().indexOf(input.toLowerCase()) > -1
      )
    });
  };

  handleCardClick = (tool: ITool) => {
    this.props.router.push(tool.url);
  };

  render() {
    return (
      <>
        <TopContainer>
          <H1>Every tool you could want at one place</H1>
          <H3>Every tool you need to use, at your fingertips!</H3>
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
              <Card
                key={tool.name}
                interactive
                elevation={2}
                onClick={() => this.handleCardClick(tool)}
              >
                <CardBody>{tool.name}</CardBody>
              </Card>
            ))}
          </CardContainer>
        </MainContainer>
      </>
    );
  }
}

const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MainContainer = styled.div`
  padding: 20px 10px 60px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
  padding: 30px 20px 30px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const CardBody = styled.div`
  font-size: 16;
  font-weight: bold;
`;

export default withRouter(Home);
