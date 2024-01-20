import { TextArea } from "@blueprintjs/core";
import { ChangeEvent } from "react";
import styled from "styled-components";
import ButtonSection, { ButtonOption } from "./ButtonSection";
import IOContainer from "./IOContainer";

const StyledTextArea = styled(TextArea)`
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
