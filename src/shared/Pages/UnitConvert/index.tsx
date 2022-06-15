import React from "react";
import { SelectOption } from "../../../types";
import HeaderSection from "../../HeaderSection";
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
      <HeaderSection heading={heading} subHeading={subHeading} />
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
