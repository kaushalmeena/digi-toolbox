import { H1, H2 } from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import { TopContainer } from "../../../common/Page/common/styles";
import { MainContainer } from "./styles";

type Base64ToImagePageProps = {
  router: NextRouter;
};

type Base64ToImagePageState = {};

class Base64ToImagePage extends Component<
  Base64ToImagePageProps,
  Base64ToImagePageState
> {
  constructor(props: Base64ToImagePageProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <TopContainer>
          <H1>Base64 to Image</H1>
          <H2>Quickly convert base64-encoded string to image</H2>
        </TopContainer>
        <MainContainer>

        </MainContainer>
      </>
    );
  }
}

export default withRouter(Base64ToImagePage);
