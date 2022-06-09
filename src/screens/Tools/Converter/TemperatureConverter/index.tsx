import React from "react";
import Page from "../../../../shared/Pages/UnitConvert";
import { TemperatureSelectOptions, TemperatureUnits } from "./constants";
import { convertTemperature } from "./utils";

function TemperatureConverter() {
  return (
    <Page
      heading="Temperature Converter"
      subHeading="Quickly convert temperature between celsius, fahrenheit and kelvin."
      selectOptions={TemperatureSelectOptions}
      fromDefaultValue={TemperatureUnits.CELSIUS}
      toDefaultValue={TemperatureUnits.FAHRENHEIT}
      convertFunction={convertTemperature}
    />
  );
}

export default TemperatureConverter;
