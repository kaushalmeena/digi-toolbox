import { H1, H2, Icon } from "@blueprintjs/core";
import React, { Component } from "react";
import { ISelectOption } from "../../../../types";
import { TopContainer } from "../../styles";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import { EqualContainer, MainContainer } from "./styles";

type UnitConvertProps = {
  heading: string;
  subHeading: string;
  selectOptions: ISelectOption[];
  fromDefaultValue?: string;
  toDefaultValue?: string;
  convertFunction: (input: string, from: string, to: string) => string;
};

type UnitConvertState = {
  input: string;
  from: string;
  to: string;
  output: string;
};

class UnitConvert extends Component<UnitConvertProps, UnitConvertState> {
  constructor(props: UnitConvertProps) {
    super(props);
    this.state = {
      input: "",
      from: props.fromDefaultValue,
      to: props.toDefaultValue,
      output: ""
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.setState((prevState) => ({
      input: value,
      output: this.getOutput(value, prevState.from, prevState.to)
    }));
  };

  handleFromSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value;
    this.setState((prevState) => ({
      from: value,
      output: this.getOutput(prevState.input, value, prevState.to)
    }));
  };

  handleOutputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.setState((prevState) => ({
      output: value,
      input: this.getOutput(value, prevState.from, prevState.to)
    }));
  };

  handleToSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = event.target.value;
    this.setState((prevState) => ({
      to: value,
      input: this.getOutput(prevState.output, prevState.from, value)
    }));
  };

  getOutput = (input: string, from: string, to: string): string => {
    let output = "";
    try {
      output = this.props.convertFunction(input, from, to);
    } catch (err) {
      console.error(err);
      output = "Invalid input detected.";
    }
    return output;
  };

  render(): JSX.Element {
    return (
      <>
        <TopContainer>
          <H1>{this.props.heading}</H1>
          <H2>{this.props.subHeading}</H2>
        </TopContainer>
        <MainContainer>
          <InputSection
            input={this.state.input}
            from={this.state.from}
            selectOptions={this.props.selectOptions}
            handleInputChange={this.handleInputChange}
            handleFromSelectChange={this.handleFromSelectChange}
          />
          <EqualContainer>
            <Icon icon="equals" iconSize={28} />
          </EqualContainer>
          <OutputSection
            output={this.state.output}
            to={this.state.to}
            selectOptions={this.props.selectOptions}
            handleOutputChange={this.handleOutputChange}
            handleToSelectChange={this.handleToSelectChange}
          />
        </MainContainer>
      </>
    );
  }
}

export default UnitConvert;
