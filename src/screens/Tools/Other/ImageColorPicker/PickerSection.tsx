import { Button, Card, InputGroup, OverlayToaster } from "@blueprintjs/core";
import { Duplicate, Export } from "@blueprintjs/icons";
import { useRef, useState } from "react";
import ButtonSection, { type ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import IOContainer from "@/components/IOContainer";
import { ToastMessages } from "@/constants";
import { copyText, loadFile } from "@/utils";
import { drawImageInCanvas, getColorFromCanvas } from "./utils";

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
    } catch {
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
      icon: <Export />,
      onClick: handleImageUpload
    }
  ];

  return (
    <>
      <ConvertContainer>
        <IOContainer>
          <Card className="p-0">
            <div className="flex min-h-[308px] items-center justify-center p-5">
              <canvas
                className="h-full max-h-[260px] max-w-full cursor-crosshair"
                hidden
                ref={canvasRef}
                onMouseMove={handleCurrentColorCapture}
                onClick={handleSelectedColorCapture}
              />
            </div>
            <div className="flex flex-wrap overflow-hidden rounded-b-[3px] border-t border-edge">
              <div
                className="flex h-[59px] min-w-[242px] flex-[0.5] items-center justify-center max-sm:flex-1"
                ref={currentColorContainerRef}
              />
              {!!selectedColor && (
                <div
                  className="flex h-[59px] min-w-[242px] flex-[0.5] items-center justify-center max-sm:flex-1"
                  style={{ backgroundColor: selectedColor }}
                >
                  <InputGroup
                    size="large"
                    readOnly
                    value={selectedColor}
                    rightElement={
                      <Button
                        size="large"
                        variant="minimal"
                        title="Copy"
                        icon={<Duplicate />}
                        onClick={handleColorCopy}
                      />
                    }
                  />
                </div>
              )}
            </div>
          </Card>
          <ButtonSection buttons={convertButtons} />
        </IOContainer>
      </ConvertContainer>
      <OverlayToaster ref={toasterRef} />
    </>
  );
}
