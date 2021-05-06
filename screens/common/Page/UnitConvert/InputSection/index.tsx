import { HTMLSelect, InputGroup } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ISelectOption } from "../../../../../types";
import { IOContainer, SelectContainer } from "../styles";

type InputSectionProps = {
  input: string;
  from: string;
  selectOptions: ISelectOption[];
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFromSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const InputSection: FunctionComponent<InputSectionProps> = (
  props: InputSectionProps
) => {
  return (
    <IOContainer>
      <InputGroup
        large
        value={props.input}
        onChange={props.handleInputChange}
      />
      <SelectContainer>
        <HTMLSelect
          fill
          large
          options={props.selectOptions}
          value={props.from}
          onChange={props.handleFromSelectChange}
        />
      </SelectContainer>
    </IOContainer>
  );
};

export default InputSection;
