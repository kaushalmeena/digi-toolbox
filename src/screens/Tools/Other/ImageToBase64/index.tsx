import { H1, H2 } from "@blueprintjs/core";
import React, { Component } from "react";
import OutputSection from "../../../../shared/Page/DataConvert/OutputSection";
import SwitchSection from "../../../../shared/Page/DataConvert/SwitchSection";
import Toast from "../../../../shared/Toast";
import { MainContainer, TopContainer } from "../../../../styles";
import { copyData, loadImage, saveFile } from "../../../../utils";
import InputSection from "./InputSection";

type ImageToBase64Props = {};

type ImageToBase64State = {
  output: string;
};

class ImageToBase64 extends Component<ImageToBase64Props, ImageToBase64State> {
  constructor(props: ImageToBase64Props) {
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
    copyData(output);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  handleOutputDownload = (): void => {
    const { output } = this.state;
    saveFile(output);
  };

  render() {
    const { output } = this.state;
    return (
      <>
        <TopContainer>
          <H1>Image to Base64</H1>
          <H2>Quickly convert image to base64-encoded string</H2>
        </TopContainer>
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
      </>
    );
  }
}

export default ImageToBase64;
