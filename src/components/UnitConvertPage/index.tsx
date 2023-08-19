"use client";

import { SelectOption } from "@/types";
import HeaderSection from "../HeaderSection";
import ConvertSection from "./ConvertSection";

type UnitConvertPageProps = {
  heading: string;
  subHeading: string;
  selectOptions: SelectOption[];
  fromDefaultValue: string;
  toDefaultValue: string;
  convertFunction: (input: string, from: string, to: string) => string;
};

export default function UnitConvertPage({
  heading,
  subHeading,
  selectOptions,
  fromDefaultValue,
  toDefaultValue,
  convertFunction
}: UnitConvertPageProps) {
  return (
    <>
      <HeaderSection heading={heading} subHeading={subHeading} />
      <ConvertSection
        selectOptions={selectOptions}
        fromDefaultValue={fromDefaultValue}
        toDefaultValue={toDefaultValue}
        convertFunction={convertFunction}
      />
    </>
  );
}
