import { H1, H2 } from "@blueprintjs/core";
import React, { Component, createRef } from "react";
import Toast from "../../../../shared/Toast";
import { MainContainer, TopContainer } from "../../../../styles";
import { copyData, loadImage } from "../../../../utils";
import PickerSection from "./PickerSection";
import { getColor } from "./utils";

type ImageColorPickerProps = {};

type ImageColorPickerState = {
  currentColor: string;
  selectedColor: string;
};

class ImageColorPicker extends Component<
  ImageColorPickerProps,
  ImageColorPickerState
> {
  canvasRef = createRef<HTMLCanvasElement>();

  constructor(props: ImageColorPickerProps) {
    super(props);
    this.state = {
      currentColor: "transparent",
      selectedColor: ""
    };
  }

  componentDidMount(): void {
    const canvas = this.canvasRef.current;
    canvas.addEventListener("mousemove", this.handleCurrentColorCapture);
    canvas.addEventListener("click", this.handleSelectedColorCapture);
  }

  componentWillUnmount(): void {
    const canvas = this.canvasRef.current;
    canvas.removeEventListener("mousemove", this.handleCurrentColorCapture);
    canvas.removeEventListener("click", this.handleSelectedColorCapture);
  }

  handleCurrentColorCapture = (event: MouseEvent): void => {
    const color = getColor(event, this.canvasRef.current);
    this.setState({
      currentColor: color
    });
  };

  handleSelectedColorCapture = (event: MouseEvent): void => {
    const color = getColor(event, this.canvasRef.current);
    this.setState({
      selectedColor: color
    });
  };

  handleImageUpload = (): void => {
    loadImage().then((result) => {
      const image = new Image();
      image.src = result;
      image.onload = () => {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    });
  };

  handleColorCopy = (): void => {
    const { selectedColor } = this.state;
    copyData(selectedColor);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  render() {
    const { currentColor, selectedColor } = this.state;
    return (
      <>
        <TopContainer>
          <H1>Image Color Picker</H1>
          <H2>Quickly pick color from image</H2>
        </TopContainer>
        <MainContainer>
          <PickerSection
            canvasRef={this.canvasRef}
            currentColor={currentColor}
            selectedColor={selectedColor}
            handleImageUpload={this.handleImageUpload}
            handleColorCopy={this.handleColorCopy}
          />
        </MainContainer>
      </>
    );
  }
}

export default ImageColorPicker;
