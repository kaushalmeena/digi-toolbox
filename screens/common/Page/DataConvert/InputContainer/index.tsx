import { Button, TextArea } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ButtonContainer, IOContainer } from "../styles";

type InputContainerProps = {
  input: string;
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
        value={props.input}
        onChange={props.handleInputChange}
      />
      <ButtonContainer>
        <Button
          large
          title="Clear"
          icon="refresh"
          onClick={props.handleInputClear}
        />
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

export default InputContainer;
