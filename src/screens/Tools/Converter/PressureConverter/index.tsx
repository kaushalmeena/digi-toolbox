import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { PressureSelectOptions, PRESSURE_UNITS } from "./constants";
import { convertPressure } from "./utils";

const PressureConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Pressure Converter"
      subHeading="Quickly convert pressure between bar, pascal, torr etc."
      selectOptions={PressureSelectOptions}
      fromDefaultValue={PRESSURE_UNITS.BAR}
      toDefaultValue={PRESSURE_UNITS.PASCAL}
      convertFunction={convertPressure}
    />
  );
};

export default PressureConverter;
