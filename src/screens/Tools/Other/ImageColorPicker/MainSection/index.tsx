import { Button, InputGroup } from "@blueprintjs/core";
import React, { Component, createRef } from "react";
import ButtonSection from "../../../../../shared/ButtonSection";
import Toast from "../../../../../shared/Toast";
import { MainContainer, NormalIOContainer } from "../../../../../styles";
import { copyText, loadImage } from "../../../../../utils";
import { getColor } from "../utils";
import { CardBody, CardFooter, ColorContainer, CustomCard } from "./styles";

type MainSectionProps = {};

type MainSectionState = {
  currentColor: string;
  selectedColor: string;
};

class MainSection extends Component<MainSectionProps, MainSectionState> {
  canvasRef = createRef<HTMLCanvasElement>();

  constructor(props: MainSectionProps) {
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
    loadImage()
      .then((result) => {
        const image = new Image();
        image.src = result;
        image.onload = () => {
          const canvas = this.canvasRef.current;
          const context = canvas.getContext("2d");
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
      })
      .catch(() => {
        Toast.show({
          message: "Invalid image file detected.",
          intent: "danger"
        });
      });
  };

  handleColorCopy = (): void => {
    const { selectedColor } = this.state;
    copyText(selectedColor).then(() => {
      Toast.show({ message: "Copied to clipboard.", intent: "primary" });
    });
  };

  render() {
    const { currentColor, selectedColor } = this.state;
    return (
      <MainContainer>
        <NormalIOContainer>
          <CustomCard>
            <CardBody>
              <canvas ref={this.canvasRef} height="0" width="0" />
            </CardBody>
            <CardFooter>
              <ColorContainer style={{ backgroundColor: currentColor }} />
              {selectedColor ? (
                <ColorContainer style={{ backgroundColor: selectedColor }}>
                  <InputGroup
                    large
                    readOnly
                    value={selectedColor}
                    rightElement={
                      <Button
                        large
                        minimal
                        title="Copy"
                        icon="duplicate"
                        onClick={this.handleColorCopy}
                      />
                    }
                  />
                </ColorContainer>
              ) : null}
            </CardFooter>
          </CustomCard>
          <ButtonSection
            buttons={[
              {
                title: "Upload",
                icon: "export",
                onClick: this.handleImageUpload
              }
            ]}
          />
        </NormalIOContainer>
      </MainContainer>
    );
  }
}

export default MainSection;
