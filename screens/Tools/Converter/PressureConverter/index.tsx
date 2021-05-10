import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { PressureSelectOptions } from "./constants";
import { convertPressure } from "./utils";

const PressureConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Pressure Converter"
      subHeading="Quickly convert pressure between bar, pascal, torr etc."
      selectOptions={PressureSelectOptions}
      fromDefaultValue="bar"
      toDefaultValue="Pa"
      convertFunction={convertPressure}
    />
  );
};

export default PressureConverter;
