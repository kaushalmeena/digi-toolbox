import { Button, Card } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import {
  ButtonContainer,
  CardImage,
  NormalIOContainer
} from "../../../../../styles";

type InputSectionProps = {
  input: string;
  handleInputUpload: () => void;
};

const InputSection: FunctionComponent<InputSectionProps> = (
  props: InputSectionProps
) => {
  return (
    <NormalIOContainer>
      <Card>
        <CardImage>
          {props.input ? <img alt="input-image" src={props.input} /> : null}
        </CardImage>
      </Card>
      <ButtonContainer>
        <Button
          large
          title="Upload"
          icon="export"
          onClick={props.handleInputUpload}
        />
      </ButtonContainer>
    </NormalIOContainer>
  );
};

export default InputSection;
