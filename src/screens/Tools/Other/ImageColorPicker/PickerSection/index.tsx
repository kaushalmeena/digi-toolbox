import { Button, InputGroup } from "@blueprintjs/core";
import React, { RefObject } from "react";
import { ButtonContainer, NormalIOContainer } from "../../../../../styles";
import { CardBody, CardFooter, ColorContainer, CustomCard } from "./styles";

type PickerSectionProps = {
  canvasRef: RefObject<HTMLCanvasElement>;
  currentColor: string;
  selectedColor: string;
  handleImageUpload: () => void;
  handleColorCopy: () => void;
};

function PickerSection({
  canvasRef,
  currentColor,
  selectedColor,
  handleImageUpload,
  handleColorCopy
}: PickerSectionProps) {
  return (
    <NormalIOContainer>
      <CustomCard>
        <CardBody>
          <canvas ref={canvasRef} height="0" width="0" />
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
                    onClick={handleColorCopy}
                  />
                }
              />
            </ColorContainer>
          ) : null}
        </CardFooter>
      </CustomCard>
      <ButtonContainer>
        <Button
          large
          title="Upload"
          icon="export"
          onClick={handleImageUpload}
        />
      </ButtonContainer>
    </NormalIOContainer>
  );
}

export default PickerSection;
