import { SelectOption } from "@/types";
import { Icon } from "@blueprintjs/core";
import { ChangeEvent, useState } from "react";
import ConvertContainer from "../ConvertContainer";
import MiddleContainer from "../MiddleContainer";
import IOSection from "./IOSection";

type ConvertSectionProps = {
  selectOptions: SelectOption[];
  fromDefaultValue: string;
  toDefaultValue: string;
  convertFunction: (input: string, from: string, to: string) => string;
};

export default function ConvertSection ({
  selectOptions,
  fromDefaultValue,
  toDefaultValue,
  convertFunction
}: ConvertSectionProps) {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState(fromDefaultValue);
  const [to, setTo] = useState(toDefaultValue);
  const [output, setOutput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInput(value);
    setOutput(getOutput(value, from, to));
  };

  const handleFromSelectChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    setFrom(value);
    setInput(output ? getOutput(output, to, value) : input);
  };

  const handleOutputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setOutput(value);
    setInput(getOutput(value, to, from));
  };

  const handleToSelectChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    setTo(value);
    setOutput(input ? getOutput(input, from, value) : output);
  };

  const getOutput = (input: string, from: string, to: string): string => {
    let output = "";
    try {
      output = convertFunction(input, from, to);
    } catch (err) {
      output = String(err) ?? "Invalid input detected";
    }
    return output;
  };

  return (
    <ConvertContainer>
      <IOSection
        inputValue={input}
        selectValue={from}
        selectOptions={selectOptions}
        handleInputChange={handleInputChange}
        handleSelectChange={handleFromSelectChange}
      />
      <MiddleContainer>
        <Icon icon="equals" size={28} />
      </MiddleContainer>
      <IOSection
        inputValue={output}
        selectValue={to}
        selectOptions={selectOptions}
        handleInputChange={handleOutputChange}
        handleSelectChange={handleToSelectChange}
      />
    </ConvertContainer>
  );
};