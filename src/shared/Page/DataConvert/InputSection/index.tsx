import { Button, TextArea } from "@blueprintjs/core";
import React from "react";
import { ButtonContainer, TextIOContainer } from "../../../../styles";

type InputSectionProps = {
  input: string;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleInputUpload: () => void;
  handleInputClear: () => void;
};

function InputSection({
  input,
  handleInputChange,
  handleInputUpload,
  handleInputClear
}: InputSectionProps) {
  return (
    <TextIOContainer>
      <TextArea fill rows={16} value={input} onChange={handleInputChange} />
      <ButtonContainer>
        <Button large title="Clear" icon="refresh" onClick={handleInputClear} />
        <Button
          large
          title="Upload"
          icon="export"
          onClick={handleInputUpload}
        />
      </ButtonContainer>
    </TextIOContainer>
  );
}

export default InputSection;
