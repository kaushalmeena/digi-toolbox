import { H1, H2 } from "@blueprintjs/core";
import React from "react";
import { TopContainer } from "../../../styles";
import { SelectOption } from "../../../types";
import MainSection from "./MainSection";

type UnitConvertProps = {
  heading: string;
  subHeading: string;
  selectOptions: SelectOption[];
  fromDefaultValue: string;
  toDefaultValue: string;
  convertFunction: (input: string, from: string, to: string) => string;
};

function UnitConvert({
  heading,
  subHeading,
  selectOptions,
  fromDefaultValue,
  toDefaultValue,
  convertFunction
}: UnitConvertProps) {
  return (
    <>
      <TopContainer>
        <H1>{heading}</H1>
        <H2>{subHeading}</H2>
      </TopContainer>
      <MainSection
        selectOptions={selectOptions}
        fromDefaultValue={fromDefaultValue}
        toDefaultValue={toDefaultValue}
        convertFunction={convertFunction}
      />
    </>
  );
}

export default UnitConvert;
