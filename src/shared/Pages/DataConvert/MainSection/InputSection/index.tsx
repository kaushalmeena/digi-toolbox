import React from "react";
import ButtonSection from "../../../../ButtonSection";
import { StyledTextArea, TextIOContainer } from "../../../styles";

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
      <StyledTextArea
        fill
        rows={16}
        value={input}
        onChange={handleInputChange}
      />
      <ButtonSection
        buttons={[
          {
            title: "Clear",
            icon: "refresh",
            onClick: handleInputClear
          },
          {
            title: "Upload",
            icon: "export",
            onClick: handleInputUpload
          }
        ]}
      />
    </TextIOContainer>
  );
}

export default InputSection;
