import ButtonSection, { ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import IOContainer from "@/components/IOContainer";
import { ToastMessages } from "@/constants/toast";
import { copyText, loadFile } from "@/utils";
import { Button, Card, InputGroup, OverlayToaster } from "@blueprintjs/core";
import { useRef, useState } from "react";
import styled from "styled-components";
import { drawImageInCanvas, getColorFromCanvas } from "./utils";

const StyledCard = styled(Card)`
  padding: 0px;
`;

const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 308px;
`;

const CardCanvas = styled.canvas`
  max-width: 100%;
  max-height: 260px;
  height: 100%;
  cursor: crosshair;
`;

const CardFooter = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  border-top: 1px solid ${(props) => props.theme.colors.gray[2]};
  border-radius: 0px 0px 3px 3px;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0.5;
  justify-content: center;
  min-width: 242px;
  height: 59px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    flex: 1;
  }
`;

export default function PickerSection() {
  const [selectedColor, setSelectedColor] = useState("");
  const currentColorContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const toasterRef = useRef<OverlayToaster>(null);

  const handleCurrentColorCapture = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    try {
      const color = getColorFromCanvas(event, canvasRef.current);
      if (currentColorContainerRef.current) {
        currentColorContainerRef.current.style.backgroundColor = color;
      }
    } catch (err) {
      toasterRef.current?.show({
        message: ToastMessages.IMAGE_COLOR_CAPTURE_FAIL,
        intent: "danger",
        isCloseButtonShown: false
      });
    }
  };

  const handleSelectedColorCapture = () => {
    if (currentColorContainerRef.current) {
      const color = currentColorContainerRef.current.style.backgroundColor;
      setSelectedColor(color);
    }
  };

  const handleImageUpload = (): void => {
    loadFile("image/*", "dataURL")
      .then((data) => {
        drawImageInCanvas(data, canvasRef.current);
      })
      .catch(() => {
        toasterRef.current?.show({
          message: ToastMessages.IMAGE_UPLOAD_FAIL,
          intent: "danger",
          isCloseButtonShown: false
        });
      });
  };

  const handleColorCopy = () => {
    copyText(selectedColor).then(() => {
      toasterRef.current?.show({
        message: ToastMessages.COPY_SUCCESS,
        intent: "primary",
        isCloseButtonShown: false
      });
    });
  };

  const convertButtons: ButtonOption[] = [
    {
      title: "Upload",
      icon: "export",
      onClick: handleImageUpload
    }
  ];

  return (
    <>
      <ConvertContainer>
        <IOContainer>
          <StyledCard>
            <CardBody>
              <CardCanvas
                hidden
                ref={canvasRef}
                onMouseMove={handleCurrentColorCapture}
                onClick={handleSelectedColorCapture}
              />
            </CardBody>
            <CardFooter>
              <ColorContainer ref={currentColorContainerRef} />
              {!!selectedColor && (
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
                        onClick={handleColorCopy}
                      />
                    }
                  />
                </ColorContainer>
              )}
            </CardFooter>
          </StyledCard>
          <ButtonSection buttons={convertButtons} />
        </IOContainer>
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
