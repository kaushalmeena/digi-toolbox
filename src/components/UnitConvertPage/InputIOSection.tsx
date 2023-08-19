import { SelectOption } from "@/types";
import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import { ChangeEvent } from "react";
import styled from "styled-components";
import IOContainer from "../IOContainer";

const StyledHTMLSelect = styled(HTMLSelect)`
  margin-top: 10px;
`;

const StyledInputGroup = styled(InputGroup)`
  & input {
    font-family: monospace !important;
  }
`;

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
      <StyledInputGroup
        large
        value={inputValue}
        rightElement={<Tag minimal>{selectValue}</Tag>}
        onChange={handleInputChange}
      />
      <StyledHTMLSelect
        fill
        large
        options={selectOptions}
        value={selectValue}
        onChange={handleSelectChange}
      />
    </IOContainer>
  );
}
