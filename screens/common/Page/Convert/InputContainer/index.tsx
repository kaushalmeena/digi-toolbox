import { Button, TextArea } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ButtonContainer, IOContainer } from "../common";

type InputContainerProps = {
  primaryInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInputUpload: () => void;
  handleInputClear: () => void;
};

const InputContainer: FunctionComponent<InputContainerProps> = (
  props: InputContainerProps
) => {
  return (
    <IOContainer>
      <TextArea
        fill
        rows={16}
        value={props.primaryInput}
        onChange={props.handleInputChange}
      />
      <ButtonContainer>
        <Button
          large
          title="Upload"
          icon="export"
          onClick={props.handleInputUpload}
        />
        <Button
          large
          title="Clear"
          icon="refresh"
          onClick={props.handleInputClear}
        />
      </ButtonContainer>
    </IOContainer>
  );
};

export default InputContainer;
