import React, { Component } from "react";
import OutputSection from "../../../../../shared/Page/DataConvert/MainSection/OutputSection";
import SwitchSection from "../../../../../shared/Page/DataConvert/MainSection/SwitchSection";
import Toast from "../../../../../shared/Toast";
import { MainContainer } from "../../../../../styles";
import { copyText, loadImage, saveFile } from "../../../../../utils";
import InputSection from "./InputSection";

type MainSectionProps = {};

type MainSectionState = {
  output: string;
};

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
    super(props);
    this.state = {
      output: ""
    };
  }

  setOutput = (value: string): void => {
    this.setState({
      output: value
    });
  };

  handleInputUpload = (): void => {
    loadImage().then((result) => this.setOutput(result));
  };

  handleOutputCopy = (): void => {
    const { output } = this.state;
    copyText(output).then(() =>
      Toast.show({ message: "Copied to clipboard.", intent: "primary" })
    );
  };

  handleOutputDownload = (): void => {
    const { output } = this.state;
    saveFile(output);
  };

  render() {
    const { output } = this.state;
    return (
      <MainContainer>
        <InputSection
          input={output}
          handleInputUpload={this.handleInputUpload}
        />
        <SwitchSection switchURL="/base64-to-image" />
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
