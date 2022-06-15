import { Tag } from "@blueprintjs/core";
import React from "react";
import { SelectOption } from "../../../../../types";
import { StyledInputGroup, TextIOContainer } from "../../../styles";
import { StyledHTMLSelect } from "../styles";

type OutputSectionProps = {
  output: string;
  to: string;
  selectOptions: SelectOption[];
  handleOutputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function OutputSection({
  output,
  to,
  selectOptions,
  handleOutputChange,
  handleToSelectChange
}: OutputSectionProps) {
  return (
    <TextIOContainer>
      <StyledInputGroup
        large
        value={output}
        rightElement={<Tag minimal>{to}</Tag>}
        onChange={handleOutputChange}
      />
      <StyledHTMLSelect
        fill
        large
        options={selectOptions}
        value={to}
        onChange={handleToSelectChange}
      />
    </TextIOContainer>
  );
}

export default OutputSection;
