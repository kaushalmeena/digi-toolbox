"use client"

import UnitConvertPage from "@/components/UnitConvertPage";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";
import { createConvertFunction } from "@/utils";

const convertFunction = createConvertFunction(ConversionMap, UnitMap.DEGREE);

export default function AngleConverterPage() {
  return (
    <UnitConvertPage
      heading="Angle Converter"
      subHeading="Quickly convert angle between degree, radian, gradian etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.DEGREE}
      toDefaultValue={UnitMap.RADIAN}
      convertFunction={convertFunction}
    />
  );
}
