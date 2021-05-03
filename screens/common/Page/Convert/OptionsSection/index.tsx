import { Card, FormGroup, HTMLSelect, InputGroup } from "@blueprintjs/core";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { IOption, ISecondaryInputs } from "../../../../../types";
import { SectionContainer, SectionTitle } from "../common";

type OptionsSectionProps = {
  options: IOption[];
  secondaryInputs?: ISecondaryInputs;
  handleSecondaryInputsChange: (name: string, value: string) => void;
};

const OptionsSection: FunctionComponent<OptionsSectionProps> = (
  props: OptionsSectionProps
) => {
  return (
    <SectionContainer>
      <SectionTitle>Options</SectionTitle>
      <Card>
        {props.options.map((item) => (
          <FormGroupContainer key={`input-${item.name}`}>
            <FormGroup label={item.label}>
              {item.type === "INPUT" && (
                <InputGroup
                  fill
                  large
                  placeholder={item.placeholder}
                  value={props.secondaryInputs[item.name]}
                  onChange={(event) => {
                    props.handleSecondaryInputsChange(
                      item.name,
                      event.target.value
                    );
                  }}
                />
              )}
              {item.type === "SELECT" && (
                <HTMLSelect
                  fill
                  large
                  options={item.options}
                  value={props.secondaryInputs[item.name]}
                  onChange={(event) => {
                    props.handleSecondaryInputsChange(
                      item.name,
                      event.target.value
                    );
                  }}
                />
              )}
            </FormGroup>
          </FormGroupContainer>
        ))}
      </Card>
    </SectionContainer>
  );
};

const FormGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > div {
    flex-basis: 33.333333%;
  }
`;

export default OptionsSection;
