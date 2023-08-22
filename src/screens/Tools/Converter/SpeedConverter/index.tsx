"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(
  ConversionMap,
  Units.METERS_PER_SECOND
);

export default function SpeedConverterPage() {
  return (
    <UnitConvertPage
      heading="Speed Converter"
      subHeading="Quickly convert speed between kilometer/hour, meter/second, miles/hour etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.KILOMETERS_PER_HOUR}
      toDefaultValue={Units.METERS_PER_SECOND}
      convertFunction={convertFunction}
    />
  );
}
