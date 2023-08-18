import React, { Component } from "react";
import InputSection from "../../../../../shared/Pages/DataConvert/MainSection/InputSection";
import SwitchSection from "../../../../../shared/Pages/DataConvert/MainSection/SwitchSection";
import Toast from "../../../../../shared/Toast";
import { ConvertContainer, MiddleContainer } from "../../../../../styles";
import { loadFile } from "../../../../../utils";
import OutputSection from "./OutputSection";
import { saveImage } from "./utils";

type MainSectionProps = {};

type MainSectionState = {
  input: string;
};

class MainSection extends Component<MainSectionProps, MainSectionState> {
  constructor(props: MainSectionProps) {
    super(props);
    this.state = {
      input: ""
    };
  }

  setInput = (value: string): void => {
    this.setState({
      input: value
    });
  };

  handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setInput(event.target.value);
  };

  handleInputClear = (): void => {
    this.setInput("");
  };

  handleInputUpload = (): void => {
    loadFile()
      .then((data) => this.setInput(data))
      .catch(() => {
        Toast.show({
          message: "Unable to upload image file.",
          intent: "danger"
        });
      });
  };

  handleOutputDownload = (): void => {
    const { input } = this.state;
    saveImage(input);
  };

  render() {
    const { input } = this.state;
    return (
      <ConvertContainer>
        <InputSection
          input={input}
          handleInputChange={this.handleInputChange}
          handleInputClear={this.handleInputClear}
          handleInputUpload={this.handleInputUpload}
        />
        <MiddleContainer>
          <SwitchSection switchURL="/image-to-base64" />
        </MiddleContainer>
        <OutputSection
          output={input}
          handleOutputDownload={this.handleOutputDownload}
        />
      </ConvertContainer>
    );
  }
}

export default MainSection;
