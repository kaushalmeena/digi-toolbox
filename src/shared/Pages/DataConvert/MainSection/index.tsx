import React, { Component } from "react";
import { ConvertContainer, MiddleContainer } from "../../../../styles";
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

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = event.target;
    this.setState({
      input: value,
      output: this.getOutput(value)
    });
  };

  handleInputClear = (): void => {
    this.setState({
      input: "",
      output: ""
    });
  };

  handleInputUpload = (): void => {
    loadFile()
      .then((value) => {
        this.setState({
          input: value,
          output: this.getOutput(value)
        });
      })
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
      <ConvertContainer>
        <InputSection
          input={input}
          handleInputChange={this.handleInputChange}
          handleInputClear={this.handleInputClear}
          handleInputUpload={this.handleInputUpload}
        />
        <MiddleContainer>
          {switchURL ? <SwitchSection switchURL={switchURL} /> : null}
        </MiddleContainer>
        <OutputSection
          output={output}
          handleOutputCopy={this.handleOutputCopy}
          handleOutputDownload={this.handleOutputDownload}
        />
      </ConvertContainer>
    );
  }
}

export default MainSection;
