"use client";

import UnitConvertPage from "@/components/UnitConvertPage/UnitConvertPage";
import { createConvertFunction } from "@/utils/unitUtils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, Units.DEGREE);

export default function AngleConverterPage() {
  return (
    <UnitConvertPage
      heading="Angle Converter"
      subHeading="Quickly convert angle between degree, radian, gradian etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.DEGREE}
      toDefaultValue={Units.RADIAN}
      convertFunction={convertFunction}
    />
  );
}
