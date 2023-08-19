"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { SelectOptions } from "./constants";
import { convertBase } from "./utils";

export default function BaseConverterPage() {
  return (
    <UnitConvertPage
      heading="Base Converter"
      subHeading="Quickly convert number between octal, hexadecimal, binary etc."
      selectOptions={SelectOptions}
      fromDefaultValue="base-10"
      toDefaultValue="base-2"
      convertFunction={convertBase}
    />
  );
}
