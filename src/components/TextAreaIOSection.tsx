import { TextArea } from "@blueprintjs/core";
import { type ChangeEvent, type DragEvent, useState } from "react";
import { twMerge } from "tailwind-merge";
import { readFileAsText } from "@/utils/fileUtils";
import ButtonSection, { type ButtonOption } from "./ButtonSection";
import IOContainer from "./IOContainer";

export default function TextAreaIOSection({
  buttons,
  value,
  onValueChange,
  onFileDrop
}: {
  buttons: ButtonOption[];
  value: string;
  onValueChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onFileDrop?: (text: string) => void;
}) {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (event: DragEvent<HTMLTextAreaElement>) => {
    if (!onFileDrop) {
      return;
    }
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = async (event: DragEvent<HTMLTextAreaElement>) => {
    if (!onFileDrop) {
      return;
    }
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onFileDrop(await readFileAsText(file));
    }
  };

  return (
    <IOContainer>
      <TextArea
        className={twMerge(
          "font-mono",
          dragging && "ring-2 ring-(--bp-palette-blue-3)"
        )}
        fill
        rows={16}
        value={value}
        onChange={onValueChange}
        readOnly={!onValueChange}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      />
      <ButtonSection buttons={buttons} />
    </IOContainer>
  );
}
