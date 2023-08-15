"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { SelectOptions, UnitMap } from "./constants";
import { convertTemperature } from "./utils";

export default function TemperatureConverterPage() {
  return (
    <UnitConvertPage
      heading="Temperature Converter"
      subHeading="Quickly convert temperature between celsius, fahrenheit and kelvin."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.CELSIUS}
      toDefaultValue={UnitMap.FAHRENHEIT}
      convertFunction={convertTemperature}
    />
  );
}
