import React from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { PressureSelectOptions, PressureUnits } from "./constants";
import { convertPressure } from "./utils";

function PressureConverter() {
  return (
    <Page
      heading="Pressure Converter"
      subHeading="Quickly convert pressure between bar, pascal, torr etc."
      selectOptions={PressureSelectOptions}
      fromDefaultValue={PressureUnits.BAR}
      toDefaultValue={PressureUnits.PASCAL}
      convertFunction={convertPressure}
    />
  );
}

export default PressureConverter;
