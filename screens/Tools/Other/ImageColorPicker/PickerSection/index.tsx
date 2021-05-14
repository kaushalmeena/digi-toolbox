import { Button, InputGroup } from "@blueprintjs/core";
import React, { FunctionComponent, RefObject } from "react";
import { ButtonContainer } from "../../../../common/styles";
import { CardBody, CardFooter, Container, CustomCard } from "./styles";

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
    <Container>
      <CustomCard>
        <CardBody>
          <canvas ref={props.canvasRef} height="0" width="0" />
        </CardBody>
        <CardFooter>
          <div
            style={{
              height: 70,
              backgroundColor: props.currentColor,
              flex: 0.5
            }}
          />
          {props.selectedColor ? (
            <div
              style={{
                height: 70,
                backgroundColor: props.selectedColor,
                flex: 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
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
            </div>
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
    </Container>
  );
};

export default PickerSection;
