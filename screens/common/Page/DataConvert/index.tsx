import { H1, H3 } from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import styled from "styled-components";
import { IOption, ISecondaryInputs } from "../../../../types";
import Toast from "../../toast";
import InputContainer from "./InputContainer";
import MiddleContainer from "./MiddleContainer";
import OptionsSection from "./OptionsSection";
import OutputContainer from "./OutputContainer";
import { copyData, loadFile, saveFile } from "./utils";

type ConvertPageProps = {
  router: NextRouter;
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  defaultSecondaryInputsValues?: ISecondaryInputs;
  options?: IOption[];
  convertFunc: (data: string, options?: ISecondaryInputs) => string;
};

type ConvertPageState = {
  primaryInput: string;
  secondaryInputs?: ISecondaryInputs;
  output: string;
};

class ConvertPage extends Component<ConvertPageProps, ConvertPageState> {
  constructor(props: ConvertPageProps) {
    super(props);
    this.state = {
      primaryInput: "",
      secondaryInputs: props.defaultSecondaryInputsValues,
      output: ""
    };
  }

  setInput = (value: string) => {
    this.setState({
      primaryInput: value
    });
  };

  setOutput = (value: string) => {
    this.setState({
      output: value
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    this.setState((prevState) => ({
      primaryInput: value,
      output: this.getOutput(value, prevState.secondaryInputs)
    }));
  };

  handleSecondaryInputsChange = (name: string, value: string) => {
    this.setState((prevState) => {
      const secondaryInputs = { ...prevState.secondaryInputs, [name]: value };
      return {
        secondaryInputs,
        output: this.getOutput(prevState.primaryInput, secondaryInputs)
      };
    });
  };

  handleInputClear = () => {
    this.setInput("");
  };

  handleInputUpload = () => {
    loadFile().then((result) => this.setInput(result));
  };

  handleOutputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setOutput(event.target.value);
  };

  handleOutputCopy = () => {
    copyData(this.state.output);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  handleOutputDownload = () => {
    saveFile(this.state.output, this.props.fileExtension, this.props.fileType);
  };

  handleSwitchAction = () => {
    this.props.router.push(this.props.switchURL);
  };

  getOutput = (primaryInput: string, secondaryInputs: ISecondaryInputs) => {
    let output = "";
    try {
      output = this.props.convertFunc(primaryInput, secondaryInputs);
    } catch (err) {
      console.error(err);
      output = "Invalid input detected.";
    }
    return output;
  };

  render() {
    return (
      <RootContainer>
        <TopContainer>
          <H1>{this.props.heading}</H1>
          <H3>{this.props.subHeading}</H3>
        </TopContainer>
        <MainContainer>
          <InputContainer
            primaryInput={this.state.primaryInput}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
            handleInputUpload={this.handleInputUpload}
          />
          <MiddleContainer
            switchURL={this.props.switchURL}
            handleSwitchAction={this.handleSwitchAction}
          />
          <OutputContainer
            output={this.state.output}
            handleOutputChange={this.handleOutputChange}
            handleOutputCopy={this.handleOutputCopy}
            handleOutputDownload={this.handleOutputDownload}
          />
        </MainContainer>
        {this.props.options ? (
          <OptionsSection
            options={this.props.options}
            secondaryInputs={this.state.secondaryInputs}
            handleSecondaryInputsChange={this.handleSecondaryInputsChange}
          />
        ) : null}
      </RootContainer>
    );
  }
}

const RootContainer = styled.div`
  padding: 0px 20px 60px 20px;
`;

const TopContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default withRouter(ConvertPage);
