import { Button, TextArea } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ButtonContainer, TextIOContainer } from "../../../../styles";

type InputSectionProps = {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInputUpload: () => void;
  handleInputClear: () => void;
};

const InputSection: FunctionComponent<InputSectionProps> = (
  props: InputSectionProps
) => {
  return (
    <TextIOContainer>
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
    </TextIOContainer>
  );
};

export default InputSection;
