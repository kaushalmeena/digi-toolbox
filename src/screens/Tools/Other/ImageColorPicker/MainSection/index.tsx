import { Button, InputGroup } from "@blueprintjs/core";
import React, { Component, createRef } from "react";
import ButtonSection from "../../../../../shared/ButtonSection";
import Toast from "../../../../../shared/Toast";
import { ConvertContainer } from "../../../../../styles";
import { copyText, loadFile } from "../../../../../utils";
import { NormalIOContainer } from "../../styles";
import { getColorFromCanvas } from "../utils";
import {
  CardBody,
  CardCanvas,
  CardFooter,
  ColorContainer,
  StyledCard
} from "./styles";

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
    canvas.hidden = true;
  }

  componentWillUnmount(): void {
    const canvas = this.canvasRef.current;
    canvas.removeEventListener("mousemove", this.handleCurrentColorCapture);
    canvas.removeEventListener("click", this.handleSelectedColorCapture);
  }

  handleCurrentColorCapture = (event: MouseEvent): void => {
    const color = getColorFromCanvas(event, this.canvasRef.current);
    this.setState({
      currentColor: color
    });
  };

  handleSelectedColorCapture = (): void => {
    this.setState((prevState) => ({
      selectedColor: prevState.currentColor
    }));
  };

  handleImageUpload = (): void => {
    loadFile("image/*", "dataURL")
      .then((result) => {
        const image = new Image();
        image.src = result;
        image.onload = () => {
          const canvas = this.canvasRef.current;
          const context = canvas.getContext("2d");
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          canvas.hidden = false;
        };
      })
      .catch(() => {
        Toast.show({
          message: "Unable to upload image file.",
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
      <ConvertContainer>
        <NormalIOContainer>
          <StyledCard>
            <CardBody>
              <CardCanvas ref={this.canvasRef} />
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
          </StyledCard>
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
      </ConvertContainer>
    );
  }
}

export default MainSection;
