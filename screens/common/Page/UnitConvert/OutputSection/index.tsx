import { HTMLSelect, InputGroup } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ISelectOption } from "../../../../../types";
import { SelectContainer, IOContainer } from "../styles";

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
    <IOContainer>
      <InputGroup
        large
        value={props.output}
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
    </IOContainer>
  );
};

export default OutputSection;
