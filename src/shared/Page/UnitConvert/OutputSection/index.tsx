import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ISelectOption } from "../../../../interfaces";
import { SelectContainer, TextIOContainer } from "../../../../styles";

type OutputSectionProps = {
  output: string;
  to: string;
  selectOptions: ISelectOption[];
  handleOutputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleToSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const OutputSection: FunctionComponent<OutputSectionProps> = (
  props: OutputSectionProps
) => {
  return (
    <TextIOContainer>
      <InputGroup
        large
        value={props.output}
        rightElement={<Tag minimal>{props.to}</Tag>}
        onChange={props.handleOutputChange}
      />
      <SelectContainer>
        <HTMLSelect
          fill
          large
          options={props.selectOptions}
          value={props.to}
          onChange={props.handleToSelectChange}
        />
      </SelectContainer>
    </TextIOContainer>
  );
};

export default OutputSection;
