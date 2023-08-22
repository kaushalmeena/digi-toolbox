"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, Units.PASCAL);

export default function PressureConverterPage() {
  return (
    <UnitConvertPage
      heading="Pressure Converter"
      subHeading="Quickly convert pressure between bar, pascal, torr etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.BAR}
      toDefaultValue={Units.PASCAL}
      convertFunction={convertFunction}
    />
  );
}
