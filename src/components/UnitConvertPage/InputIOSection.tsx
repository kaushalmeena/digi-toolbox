import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import type { ChangeEvent } from "react";
import type { SelectOption } from "@/types";
import IOContainer from "../IOContainer";

type InputIOSectionProps = {
  inputValue: string;
  selectValue: string;
  selectOptions: SelectOption[];
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export default function InputIOSection({
  inputValue,
  selectValue,
  selectOptions,
  handleInputChange,
  handleSelectChange
}: InputIOSectionProps) {
  return (
    <IOContainer>
      <InputGroup
        className="[&_input]:font-mono"
        size="large"
        value={inputValue}
        rightElement={<Tag minimal>{selectValue}</Tag>}
        onChange={handleInputChange}
      />
      <HTMLSelect
        className="mt-2.5"
        fill
        large
        options={selectOptions}
        value={selectValue}
        onChange={handleSelectChange}
      />
    </IOContainer>
  );
}
