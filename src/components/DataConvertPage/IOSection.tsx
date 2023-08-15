import React, { ChangeEvent } from "react";
import ButtonSection, { ButtonOption } from "../ButtonSection";
import styled from "styled-components";
import { TextArea } from "@blueprintjs/core";
import TextIOContainer from "../TextIOContainer";

export const StyledTextArea = styled(TextArea)`
  & input {
    font-family: monospace !important;
  }
`;

type IOSectionProps = {
  buttons: ButtonOption[];
  value: string;
  handleValueChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

function IOSection({ buttons, value, handleValueChange }: IOSectionProps) {
  return (
    <TextIOContainer>
      <StyledTextArea
        fill
        rows={16}
        value={value}
        onChange={handleValueChange}
        readOnly={!handleValueChange}
      />
      <ButtonSection buttons={buttons} />
    </TextIOContainer>
  );
}

export default IOSection;
