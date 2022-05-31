import { H1, H2 } from "@blueprintjs/core";
import React, { Component } from "react";
import { copyData, loadFile, saveFile } from "../../../utils";
import { MainContainer, MiddleContainer, TopContainer } from "../../../styles";
import Toast from "../../Toast";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import SwitchSection from "./SwitchSection";

type DataConvertProps = {
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

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = event.target;
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

  handleOutputCopy = (): void => {
    const { output } = this.state;
    copyData(output);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  handleOutputDownload = (): void => {
    const { fileExtension, fileType } = this.props;
    const { output } = this.state;
    saveFile(output, fileExtension, fileType);
  };

  getOutput = (input: string): string => {
    const { convertFunction } = this.props;
    let output = "";
    try {
      output = convertFunction(input);
    } catch (err) {
      output = "Invalid input detected.";
    }
    return output;
  };

  render() {
    const { heading, subHeading, switchURL } = this.props;
    const { input, output } = this.state;
    return (
      <>
        <TopContainer>
          <H1>{heading}</H1>
          <H2>{subHeading}</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={input}
            handleInputChange={this.handleInputChange}
            handleInputClear={this.handleInputClear}
            handleInputUpload={this.handleInputUpload}
          />
          {switchURL ? (
            <SwitchSection switchURL={switchURL} />
          ) : (
            <MiddleContainer />
          )}
          <OutputSection
            output={output}
            handleOutputCopy={this.handleOutputCopy}
            handleOutputDownload={this.handleOutputDownload}
          />
        </MainContainer>
      </>
    );
  }
}

export default DataConvert;
