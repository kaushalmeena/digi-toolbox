import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { TemperatureSelectOptions } from "./constants";
import { convertTemperature } from "./utils";

const TemperatureConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Temperature Converter"
      subHeading="Quickly convert temperature between celsius, fahrenheit and kelvin."
      selectOptions={TemperatureSelectOptions}
      fromDefaultValue="°C"
      toDefaultValue="°F"
      convertFunction={convertTemperature}
    />
  );
};

export default TemperatureConverter;
