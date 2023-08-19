import React, { ChangeEvent } from "react";
import ButtonSection, { ButtonOption } from "./ButtonSection";
import styled from "styled-components";
import { TextArea } from "@blueprintjs/core";
import IOContainer from "./IOContainer";

export const StyledTextArea = styled(TextArea)`
  & input {
    font-family: monospace !important;
  }
`;

type TextAreaIOSectionProps = {
  buttons: ButtonOption[];
  value: string;
  handleValueChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextAreaIOSection({
  buttons,
  value,
  handleValueChange
}: TextAreaIOSectionProps) {
  return (
    <IOContainer>
      <StyledTextArea
        fill
        rows={16}
        value={value}
        onChange={handleValueChange}
        readOnly={!handleValueChange}
      />
      <ButtonSection buttons={buttons} />
    </IOContainer>
  );
}
