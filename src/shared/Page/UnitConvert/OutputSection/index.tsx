import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import React from "react";
import { ISelectOption } from "../../../../interfaces";
import { SelectContainer, TextIOContainer } from "../../../../styles";

type OutputSectionProps = {
  output: string;
  to: string;
  selectOptions: ISelectOption[];
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
      <InputGroup
        large
        value={output}
        rightElement={<Tag minimal>{to}</Tag>}
        onChange={handleOutputChange}
      />
      <SelectContainer>
        <HTMLSelect
          fill
          large
          options={selectOptions}
          value={to}
          onChange={handleToSelectChange}
        />
      </SelectContainer>
    </TextIOContainer>
  );
}

export default OutputSection;
