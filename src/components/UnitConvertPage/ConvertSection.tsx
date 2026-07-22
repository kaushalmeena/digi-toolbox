import { Equals } from "@blueprintjs/icons";
import { type ChangeEvent, useState } from "react";
import type { SelectOption } from "@/types";
import ConvertContainer from "../ConvertContainer";
import MiddleContainer from "../MiddleContainer";
import IOSection from "./InputIOSection";

export default function ConvertSection({
  selectOptions,
  fromDefaultValue,
  toDefaultValue,
  convertFunction
}: {
  selectOptions: SelectOption[];
  fromDefaultValue: string;
  toDefaultValue: string;
  convertFunction: (input: string, from: string, to: string) => string;
}) {
  const [input, setInput] = useState("");
  const [from, setFrom] = useState(fromDefaultValue);
  const [to, setTo] = useState(toDefaultValue);
  const [output, setOutput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
    setOutput(getOutput(value, from, to));
  };

  const handleFromSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setFrom(value);
    setInput(output ? getOutput(output, to, value) : input);
  };

  const handleOutputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOutput(value);
    setInput(getOutput(value, to, from));
  };

  const handleToSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setTo(value);
    setOutput(input ? getOutput(input, from, value) : output);
  };

  const getOutput = (value: string, from: string, to: string) => {
    let output = "";
    try {
      output = convertFunction(value, from, to);
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
        <Equals size={28} />
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
}
