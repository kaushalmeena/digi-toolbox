import React, { Component } from "react";
import InputSection from "../../../../../shared/Pages/DataConvert/MainSection/InputSection";
import { ConvertContainer, MiddleContainer } from "../../../../../styles";
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
        prevState.leftInput,
        value
      );
      return {
        rightInput: value,
        leftOutput,
        rightOutput
      };
    });
  };

  handleLeftInputClear = (): void => {
    this.setState({
      leftInput: "",
      leftOutput: null,
      rightOutput: null
    });
  };

  handleRightInputClear = (): void => {
    this.setState({
      rightInput: "",
      leftOutput: null,
      rightOutput: null
    });
  };

  handleLeftInputUpload = (): void => {
    loadFile().then((data) => this.setLeftInput(data));
  };

  handleRightInputUpload = (): void => {
    loadFile().then((data) => this.setRightInput(data));
  };

  render() {
    const { leftInput, rightInput, leftOutput, rightOutput } = this.state;
    return (
      <>
        <ConvertContainer>
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
        </ConvertContainer>
        {leftOutput && rightOutput ? (
          <ConvertContainer>
            <OutputSection output={leftOutput} />
            <MiddleContainer />
            <OutputSection output={rightOutput} />
          </ConvertContainer>
        ) : null}
      </>
    );
  }
}

export default MainSection;
