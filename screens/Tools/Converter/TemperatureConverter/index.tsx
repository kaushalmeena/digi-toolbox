import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { temperatureSelectOptions } from "./constants";
import { convertTemperature } from "./utils";

const TemperatureConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Temperature Converter"
      subHeading="Quickly convert temperatures between Celsius, Fahrenheit, Kelvin etc."
      selectOptions={temperatureSelectOptions}
      fromDefaultValue="°C"
      toDefaultValue="°F"
      convertFunction={convertTemperature}
    />
  );
};

export default TemperatureConverter;
