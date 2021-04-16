import { Button, H1, H3, MenuItem } from "@blueprintjs/core";
import { Select } from "@blueprintjs/select";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import { MainContainer, TopContainer } from "../common/StyledComponents";
import { itemPredicate, itemRenderer, ITool, TOOLS } from "./utils";

const ToolSelect = Select.ofType<ITool>();

type HomeProps = {
  router: NextRouter;
};

class Home extends Component<HomeProps> {
  constructor(props: HomeProps) {
    super(props);
  }

  handleItemSelect = (tool: ITool) => {
    this.props.router.push(tool.url);
  };

  render() {
    return (
      <>
        <TopContainer>
          <H1>Every tool you could want at one place</H1>
          <H3>
            Every tool you need to use PDFs, at your fingertips. All are 100%
            FREE and easy to use!
          </H3>
        </TopContainer>
        <MainContainer>
          <ToolSelect
            items={TOOLS}
            itemRenderer={itemRenderer}
            itemPredicate={itemPredicate}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={this.handleItemSelect}
          >
            <Button
              large
              text="Select tool"
              icon="wrench"
              rightIcon="caret-down"
            />
          </ToolSelect>
        </MainContainer>
      </>
    );
  }
}

export default withRouter(Home);
