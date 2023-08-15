"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";
import { createConvertFunction } from "@/utils";

const convertFunction = createConvertFunction(
  ConversionMap,
  UnitMap.METERS_PER_SECOND
);

export default function SpeedConverterPage() {
  return (
    <UnitConvertPage
      heading="Speed Converter"
      subHeading="Quickly convert speed between kilometer/hour, meter/second, miles/hour etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.KILOMETERS_PER_HOUR}
      toDefaultValue={UnitMap.METERS_PER_SECOND}
      convertFunction={convertFunction}
    />
  );
}
