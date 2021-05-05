import { H1, H2 } from "@blueprintjs/core";
import React, { Component } from "react";
import { TopContainer } from "../../styles";
import SwitchContainer from "../../SwitchContainer";
import { Toast } from "../../utils";
import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";
import { MainContainer } from "./styles";
import { copyData, loadFile, saveFile } from "./utils";

type DataConvertProps = {
  heading: string;
  subHeading: string;
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (data: string) => string;
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
          <InputContainer
            input={this.state.input}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
            handleInputUpload={this.handleInputUpload}
          />
          <SwitchContainer switchURL={this.props.switchURL} />
          <OutputContainer
            output={this.state.output}
            handleOutputChange={this.handleOutputChange}
            handleOutputCopy={this.handleOutputCopy}
            handleOutputDownload={this.handleOutputDownload}
          />
        </MainContainer>
      </>
    );
  }
}

export default DataConvert;
