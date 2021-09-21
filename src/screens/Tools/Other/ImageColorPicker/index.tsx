import { H1, H2 } from "@blueprintjs/core";
import React, { Component, createRef, ReactNode } from "react";
import { copyData, loadImage, Toast } from "../../../../utils";
import { MainContainer, TopContainer } from "../../../../styles";
import PickerSection from "./PickerSection";

type ImageColorPickerProps = {
  children?: ReactNode;
};

type ImageColorPickerState = {
  currentColor: string;
  selectedColor: string;
};

class ImageColorPicker extends Component<
  ImageColorPickerProps,
  ImageColorPickerState
> {
  constructor(props: ImageColorPickerProps) {
    super(props);
    this.state = {
      currentColor: "transparent",
      selectedColor: ""
    };
  }

  canvasRef = createRef<HTMLCanvasElement>();

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
    const color = this.getColor(event);
    this.setState({
      currentColor: color
    });
  };

  handleSelectedColorCapture = (event: MouseEvent): void => {
    const color = this.getColor(event);
    this.setState({
      selectedColor: color
    });
  };

  getColor = (event: MouseEvent): string => {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");

    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;

    const x = (event.offsetX / canvas.offsetWidth) * canvas.width;
    const y = (event.offsetY / canvas.offsetHeight) * canvas.height;

    const i = (x + y * canvas.width) * 4;
    const R = pixels[i];
    const G = pixels[i + 1];
    const B = pixels[i + 2];

    return `rgb(${R}, ${G}, ${B})`;
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
    copyData(this.state.selectedColor);
    Toast.show({ message: "Copied to clipboard.", intent: "primary" });
  };

  render(): JSX.Element {
    return (
      <>
        <TopContainer>
          <H1>Image Color Picker</H1>
          <H2>Quickly pick color from image</H2>
        </TopContainer>
        <MainContainer>
          <PickerSection
            canvasRef={this.canvasRef}
            currentColor={this.state.currentColor}
            selectedColor={this.state.selectedColor}
            handleImageUpload={this.handleImageUpload}
            handleColorCopy={this.handleColorCopy}
          />
        </MainContainer>
      </>
    );
  }
}

export default ImageColorPicker;
