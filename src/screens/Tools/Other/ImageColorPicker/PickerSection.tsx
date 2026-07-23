import { Button, Card, InputGroup } from "@blueprintjs/core";
import { DuplicateIcon, ExportIcon } from "@blueprintjs/icons";
import { useRef, useState } from "react";
import ButtonSection, { type ButtonOption } from "@/components/ButtonSection";
import ConvertContainer from "@/components/ConvertContainer";
import IOContainer from "@/components/IOContainer";
import { ToastMessages } from "@/constants/toast";
import { appToaster } from "@/lib/toaster";
import { copyText } from "@/utils/copyUtils";
import { loadFile } from "@/utils/fileUtils";
import { drawImageInCanvas, getColorFromCanvas } from "./utils";

export default function PickerSection() {
  const [selectedColor, setSelectedColor] = useState("");
  const currentColorContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleCurrentColorCapture = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    try {
      const color = getColorFromCanvas(event, canvasRef.current);
      if (currentColorContainerRef.current) {
        currentColorContainerRef.current.style.backgroundColor = color;
      }
    } catch {
      appToaster.show({
        message: ToastMessages.IMAGE_COLOR_CAPTURE_FAIL,
        intent: "danger"
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
        appToaster.show({
          message: ToastMessages.IMAGE_UPLOAD_FAIL,
          intent: "danger"
        });
      });
  };

  const handleColorCopy = () => {
    copyText(selectedColor).then(() => {
      appToaster.show({
        message: ToastMessages.COPY_SUCCESS,
        intent: "primary"
      });
    });
  };

  const convertButtons: ButtonOption[] = [
    {
      title: "Upload",
      icon: <ExportIcon />,
      onClick: handleImageUpload
    }
  ];

  return (
    <ConvertContainer>
      <IOContainer>
        <Card className="p-0">
          <div className="flex min-h-77 items-center justify-center p-5">
            <canvas
              className="h-full max-h-65 max-w-full cursor-crosshair"
              hidden
              ref={canvasRef}
              onMouseMove={handleCurrentColorCapture}
              onClick={handleSelectedColorCapture}
            />
          </div>
          <div className="flex flex-wrap overflow-hidden rounded-b-[3px] border-t border-border">
            <div
              className="flex h-14.75 min-w-60.5 flex-[0.5] items-center justify-center max-sm:flex-1"
              ref={currentColorContainerRef}
            />
            {!!selectedColor && (
              <div
                className="flex h-14.75 min-w-60.5 flex-[0.5] items-center justify-center max-sm:flex-1"
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
                      icon={<DuplicateIcon />}
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
  );
}
