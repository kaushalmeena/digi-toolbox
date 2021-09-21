import { H1, H2 } from "@blueprintjs/core";
import React, { Component, ReactNode } from "react";
import { copyData, loadImage, saveFile, Toast } from "../../../../utils";
import OutputSection from "../../../../shared/Page/DataConvert/OutputSection";
import SwitchSection from "../../../../shared/Page/DataConvert/SwitchSection";
import { MainContainer, TopContainer } from "../../../../styles";
import InputSection from "./InputSection";

type ImageToBase64Props = {
  children?: ReactNode;
};

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
    saveFile(this.state.output);
  };

  render(): JSX.Element {
    return (
      <>
        <TopContainer>
          <H1>Image to Base64</H1>
          <H2>Quickly convert image to base64-encoded string</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={this.state.output}
            handleInputUpload={this.handleInputUpload}
          />
          <SwitchSection switchURL="/base64-to-image" />
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

export default ImageToBase64;
