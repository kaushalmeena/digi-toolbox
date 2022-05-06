import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { TemperatureSelectOptions, TEMPERATURE_UNITS } from "./constants";
import { convertTemperature } from "./utils";

const TemperatureConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Temperature Converter"
      subHeading="Quickly convert temperature between celsius, fahrenheit and kelvin."
      selectOptions={TemperatureSelectOptions}
      fromDefaultValue={TEMPERATURE_UNITS.CELSIUS}
      toDefaultValue={TEMPERATURE_UNITS.FAHRENHEIT}
      convertFunction={convertTemperature}
    />
  );
};

export default TemperatureConverter;
