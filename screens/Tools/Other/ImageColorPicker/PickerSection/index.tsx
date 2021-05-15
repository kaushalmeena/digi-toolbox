import { Button, InputGroup } from "@blueprintjs/core";
import React, { FunctionComponent, RefObject } from "react";
import { ButtonContainer, NormalIOContainer } from "../../../../common/styles";
import { CardBody, CardFooter, ColorContainer, CustomCard } from "./styles";

type PickerSectionProps = {
  canvasRef: RefObject<HTMLCanvasElement>;
  currentColor: string;
  selectedColor: string;
  handleImageUpload: () => void;
  handleColorCopy: () => void;
};

const PickerSection: FunctionComponent<PickerSectionProps> = (
  props: PickerSectionProps
) => {
  return (
    <NormalIOContainer>
      <CustomCard>
        <CardBody>
          <canvas ref={props.canvasRef} height="0" width="0" />
        </CardBody>
        <CardFooter>
          <ColorContainer style={{ backgroundColor: props.currentColor }} />
          {props.selectedColor ? (
            <ColorContainer style={{ backgroundColor: props.selectedColor }}>
              <InputGroup
                large
                readOnly
                value={props.selectedColor}
                rightElement={
                  <Button
                    large
                    minimal
                    title="Copy"
                    icon="duplicate"
                    onClick={props.handleColorCopy}
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
          onClick={props.handleImageUpload}
        />
      </ButtonContainer>
    </NormalIOContainer>
  );
};

export default PickerSection;
