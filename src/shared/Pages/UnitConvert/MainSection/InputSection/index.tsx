import { Tag } from "@blueprintjs/core";
import React from "react";
import { SelectOption } from "../../../../../types";
import { StyledInputGroup, TextIOContainer } from "../../../styles";
import { StyledHTMLSelect } from "../styles";

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
      <StyledInputGroup
        large
        rightElement={<Tag minimal>{from}</Tag>}
        value={input}
        onChange={handleInputChange}
      />
      <StyledHTMLSelect
        fill
        large
        options={selectOptions}
        value={from}
        onChange={handleFromSelectChange}
      />
    </TextIOContainer>
  );
}

export default InputSection;
