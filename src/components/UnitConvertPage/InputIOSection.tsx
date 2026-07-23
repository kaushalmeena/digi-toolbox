import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import type { ChangeEvent } from "react";
import type { SelectOption } from "@/types/select";
import IOContainer from "../IOContainer";

export default function InputIOSection({
  inputValue,
  selectValue,
  selectOptions,
  onInputChange,
  onSelectChange
}: {
  inputValue: string;
  selectValue: string;
  selectOptions: SelectOption[];
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <IOContainer>
      <InputGroup
        className="[&_input]:font-mono"
        size="large"
        placeholder="Enter a value"
        value={inputValue}
        rightElement={<Tag minimal>{selectValue}</Tag>}
        onChange={onInputChange}
      />
      <HTMLSelect
        className="mt-2.5"
        fill
        large
        options={selectOptions}
        value={selectValue}
        onChange={onSelectChange}
      />
    </IOContainer>
  );
}
