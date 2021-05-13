import { H1, H2 } from "@blueprintjs/core";
import { NextRouter, withRouter } from "next/router";
import React, { Component } from "react";
import { copyData, loadFile, saveFile, Toast } from "../../../../utils";
import { MainContainer, MiddleContainer, TopContainer } from "../../styles";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import SwitchButton from "./SwitchButton";

type DataConvertProps = {
  router: NextRouter;
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
};

type DataConvertState = {
  input: string;
  output: string;
};

class DataConvert extends Component<DataConvertProps, DataConvertState> {
  constructor(props: DataConvertProps) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };
  }

  setInput = (value: string): void => {
    this.setState({
      input: value
    });
  };

  setOutput = (value: string): void => {
    this.setState({
      output: value
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;
    this.setState({
      input: value,
      output: this.getOutput(value)
    });
  };

  handleInputClear = (): void => {
    this.setInput("");
  };

  handleInputUpload = (): void => {
    loadFile().then((result) => this.setInput(result));
  };

  handleOutputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    this.setOutput(event.target.value);
  };

  handleOutputCopy = (): void => {
    copyData(this.state.output);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  handleOutputDownload = (): void => {
    saveFile(this.state.output, this.props.fileExtension, this.props.fileType);
  };

  handleSwitchAction = (): void => {
    this.props.router.push(this.props.switchURL);
  };

  getOutput = (input: string): string => {
    let output = "";
    try {
      output = this.props.convertFunction(input);
    } catch (err) {
      console.error(err);
      output = "Invalid input detected.";
    }
    return output;
  };

  render(): JSX.Element {
    return (
      <>
        <TopContainer>
          <H1>{this.props.heading}</H1>
          <H2>{this.props.subHeading}</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
            handleInputUpload={this.handleInputUpload}
          />
          <MiddleContainer>
            {this.props.switchURL ? (
              <SwitchButton handleSwitchAction={this.handleSwitchAction} />
            ) : null}
          </MiddleContainer>
          <OutputSection
            output={this.state.output}
            handleOutputCopy={this.handleOutputCopy}
            handleOutputDownload={this.handleOutputDownload}
          />
        </MainContainer>
      </>
    );
  }
}

export default withRouter(DataConvert);
