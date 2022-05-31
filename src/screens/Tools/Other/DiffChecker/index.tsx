import { H1, H2 } from "@blueprintjs/core";
import React, { Component } from "react";
import InputSection from "../../../../shared/Page/DataConvert/InputSection";
import {
  MainContainer,
  MiddleContainer,
  TopContainer
} from "../../../../styles";
import { loadFile } from "../../../../utils";
import OutputSection from "./OutputSection";
import { getLeftAndRightOutput } from "./utils";

type DiffCheckerProps = {};

type DiffCheckerState = {
  leftInput: string;
  rightInput: string;
  leftOutput: string[][];
  rightOutput: string[][];
};

class DiffChecker extends Component<DiffCheckerProps, DiffCheckerState> {
  constructor(props: DiffCheckerProps) {
    super(props);
    this.state = {
      leftInput: "",
      rightInput: "",
      leftOutput: null,
      rightOutput: null
    };
  }

  setLeftInput = (value: string): void => {
    this.setState({
      leftInput: value
    });
  };

  setRightInput = (value: string): void => {
    this.setState({
      rightInput: value
    });
  };

  handleLeftInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = event.target;
    this.setState((prevState) => {
      const [leftOutput, rightOutput] = getLeftAndRightOutput(
        value,
        prevState.rightInput
      );
      return {
        leftInput: value,
        leftOutput,
        rightOutput
      };
    });
  };

  handleRightInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { value } = event.target;
    this.setState((prevState) => {
      const [leftOutput, rightOutput] = getLeftAndRightOutput(
        value,
        prevState.leftInput
      );
      return {
        rightInput: value,
        leftOutput,
        rightOutput
      };
    });
  };

  handleLeftInputClear = (): void => {
    this.setLeftInput("");
  };

  handleRightInputClear = (): void => {
    this.setRightInput("");
  };

  handleLeftInputUpload = (): void => {
    loadFile().then((result) => this.setLeftInput(result));
  };

  handleRightInputUpload = (): void => {
    loadFile().then((result) => this.setRightInput(result));
  };

  render() {
    const { leftInput, rightInput, leftOutput, rightOutput } = this.state;
    return (
      <>
        <TopContainer>
          <H1>Diff-Checker</H1>
          <H2>Quickly compare two set of text to find differences</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={leftInput}
            handleInputChange={this.handleLeftInputChange}
            handleInputClear={this.handleLeftInputClear}
            handleInputUpload={this.handleLeftInputUpload}
          />
          <MiddleContainer />
          <InputSection
            input={rightInput}
            handleInputChange={this.handleRightInputChange}
            handleInputClear={this.handleRightInputClear}
            handleInputUpload={this.handleRightInputUpload}
          />
        </MainContainer>
        {leftOutput && rightOutput ? (
          <MainContainer>
            <OutputSection output={leftOutput} />
            <MiddleContainer />
            <OutputSection output={rightOutput} />
          </MainContainer>
        ) : null}
      </>
    );
  }
}

export default DiffChecker;
