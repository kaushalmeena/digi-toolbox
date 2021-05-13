import { Button, Card } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ButtonContainer } from "../../../../common/Page/DataConvert/styles";
import { CardImage, IOContainer } from "../../../../common/styles";

type InputSectionProps = {
  input: string;
  handleInputUpload: () => void;
};

const InputSection: FunctionComponent<InputSectionProps> = (
  props: InputSectionProps
) => {
  return (
    <IOContainer>
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
    </IOContainer>
  );
};

export default InputSection;
