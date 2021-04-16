import { Button, H1, H3, TextArea } from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import {
  BoxContainer,
  ButtonContainer,
  MainContainer,
  TopContainer
} from "../../../common/StyledComponents";
import Toast from "../../../common/toast";

type JSONToCSVProps = {
  router: NextRouter;
};

class JSONToCSV extends Component<JSONToCSVProps> {
  constructor(props: JSONToCSVProps) {
    super(props);
  }

  handleCopy = () => {
    Toast.show({ message: "Coopied!", intent: "success" });
  };

  render() {
    return (
      <>
        <TopContainer>
          <H1>JSON to CSV</H1>
          <H3>Convert your JSON to CSV formatted data.</H3>
        </TopContainer>
        <MainContainer>
          <BoxContainer>
            <TextArea fill rows={16}></TextArea>
            <ButtonContainer>
              <Button
                large
                intent="primary"
                text="Convert"
                rightIcon="arrow-right"
              />
              <Button large text="Clear" icon="refresh" />
            </ButtonContainer>
          </BoxContainer>
          <BoxContainer>
            <TextArea readOnly fill rows={16}></TextArea>
            <ButtonContainer>
              <Button
                large
                text="Copy"
                icon="clipboard"
                onClick={this.handleCopy}
              />
              <Button large text="Download" icon="import" />
            </ButtonContainer>
          </BoxContainer>
        </MainContainer>
      </>
    );
  }
}

export default withRouter(JSONToCSV);
