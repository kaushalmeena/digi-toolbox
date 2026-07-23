import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import type { ChangeEvent } from "react";
import type { SelectOption } from "@/types/select";
import IOContainer from "../IOContainer";

export default function InputIOSection({
  inputValue,
  selectValue,
  selectOptions,
  handleInputChange,
  handleSelectChange
}: {
  inputValue: string;
  selectValue: string;
  selectOptions: SelectOption[];
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
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
