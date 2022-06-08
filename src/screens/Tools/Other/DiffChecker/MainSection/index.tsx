import React, { Component } from "react";
import InputSection from "../../../../../shared/Page/DataConvert/MainSection/InputSection";
import { MainContainer, MiddleContainer } from "../../../../../styles";
import { loadFile } from "../../../../../utils";
import OutputSection from "./OutputSection";
import { getLeftAndRightOutput } from "../utils";

type MainSectionProps = {};

type MainSectionState = {
  leftInput: string;
  rightInput: string;
  leftOutput: string[][];
  rightOutput: string[][];
};

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
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

export default MainSection;
