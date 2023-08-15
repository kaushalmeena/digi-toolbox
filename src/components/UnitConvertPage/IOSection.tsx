import { SelectOption } from "@/types";
import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import React, { ChangeEvent } from "react";
import styled from "styled-components";

const StyledHTMLSelect = styled(HTMLSelect)`
  margin-top: 10px;
`;

const StyledInputGroup = styled(InputGroup)`
  & input {
    font-family: monospace !important;
  }
`;

const TextIOContainer = styled.div`
  flex: 1;
  padding: 20px 0px;
  min-width: 300px;
`;

type IOSectionProps = {
  inputValue: string;
  selectValue: string;
  selectOptions: SelectOption[];
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export default function IOSection({
  inputValue,
  selectValue,
  selectOptions,
  handleInputChange,
  handleSelectChange
}: IOSectionProps) {
  return (
    <TextIOContainer>
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
    </TextIOContainer>
  );
}
