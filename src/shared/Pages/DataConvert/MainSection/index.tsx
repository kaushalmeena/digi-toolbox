import React, { Component } from "react";
import { MainContainer, MiddleContainer } from "../../../../styles";
import { copyText, loadFile, saveFile } from "../../../../utils";
import Toast from "../../../Toast";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import SwitchSection from "./SwitchSection";

type MainSectionProps = {
  fileExtension: string;
  fileType: string;
  switchURL?: string;
  convertFunction: (input: string) => string;
};

type MainSectionState = {
  input: string;
  output: string;
};

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
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
    loadFile()
      .then((result) => this.setInput(result))
      .catch(() => {
        Toast.show({
          message: "Unable to upload file.",
          intent: "danger"
        });
      });
  };

  handleOutputCopy = (): void => {
    const { output } = this.state;
    copyText(output).then(() =>
      Toast.show({ message: "Copied to clipboard.", intent: "primary" })
    );
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
      output = err?.message ?? "Invalid input detected";
    }
    return output;
  };

  render() {
    const { switchURL } = this.props;
    const { input, output } = this.state;
    return (
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
    );
  }
}

export default MainSection;
