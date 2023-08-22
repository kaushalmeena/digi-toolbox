"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { SelectOptions, Units } from "./constants";
import { convertTemperature } from "./utils";

export default function TemperatureConverterPage() {
  return (
    <UnitConvertPage
      heading="Temperature Converter"
      subHeading="Quickly convert temperature between celsius, fahrenheit and kelvin."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.CELSIUS}
      toDefaultValue={Units.FAHRENHEIT}
      convertFunction={convertTemperature}
    />
  );
}
