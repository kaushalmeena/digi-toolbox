import type { SelectOption } from "@/types/select";
import HeaderSection from "../HeaderSection";
import ConvertSection from "./ConvertSection";

export default function UnitConvertPage({
  heading,
  subHeading,
  selectOptions,
  fromDefaultValue,
  toDefaultValue,
  convertFunction
}: {
  heading: string;
  subHeading: string;
  selectOptions: SelectOption[];
  fromDefaultValue: string;
  toDefaultValue: string;
  convertFunction: (input: string, from: string, to: string) => string;
}) {
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
