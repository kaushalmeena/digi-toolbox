import { TextArea } from "@blueprintjs/core";
import type { ChangeEvent } from "react";
import ButtonSection, { type ButtonOption } from "./ButtonSection";
import IOContainer from "./IOContainer";

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
      <TextArea
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
