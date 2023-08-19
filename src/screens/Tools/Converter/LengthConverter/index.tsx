"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";
import { createConvertFunction } from "@/utils";

const convertFunction = createConvertFunction(ConversionMap, UnitMap.METER);

export default function LengthConverterPage() {
  return (
    <UnitConvertPage
      heading="Length Converter"
      subHeading="Quickly convert length between kilometer, foot, yard etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.KILOMETER}
      toDefaultValue={UnitMap.METER}
      convertFunction={convertFunction}
    />
  );
}
