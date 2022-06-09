import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import React from "react";
import { SelectOption } from "../../../../../types";
import { TextIOContainer } from "../../../styles";
import { SelectContainer } from "../styles";

type InputSectionProps = {
  input: string;
  from: string;
  selectOptions: SelectOption[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFromSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function InputSection({
  input,
  from,
  selectOptions,
  handleInputChange,
  handleFromSelectChange
}: InputSectionProps) {
  return (
    <TextIOContainer>
      <InputGroup
        large
        rightElement={<Tag minimal>{from}</Tag>}
        value={input}
        onChange={handleInputChange}
      />
      <SelectContainer>
        <HTMLSelect
          fill
          large
          options={selectOptions}
          value={from}
          onChange={handleFromSelectChange}
        />
      </SelectContainer>
    </TextIOContainer>
  );
}

export default InputSection;
