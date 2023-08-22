"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, Units.METER);

export default function LengthConverterPage() {
  return (
    <UnitConvertPage
      heading="Length Converter"
      subHeading="Quickly convert length between kilometer, foot, yard etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.KILOMETER}
      toDefaultValue={Units.METER}
      convertFunction={convertFunction}
    />
  );
}
