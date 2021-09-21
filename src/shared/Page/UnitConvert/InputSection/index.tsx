import { HTMLSelect, InputGroup, Tag } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import { ISelectOption } from "../../../../../interfaces";
import { TextIOContainer, SelectContainer } from "../../../../styles";

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
    <TextIOContainer>
      <InputGroup
        large
        rightElement={<Tag minimal>{props.from}</Tag>}
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
    </TextIOContainer>
  );
};

export default InputSection;
