import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { pressureSelectOptions } from "./constants";
import { convertPressure } from "./utils";

const PressureConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Pressure Converter"
      subHeading="Quickly convert pressures between bar, pascal, torr etc."
      selectOptions={pressureSelectOptions}
      fromDefaultValue="bar"
      toDefaultValue="Pa"
      convertFunction={convertPressure}
    />
  );
};

export default PressureConverter;
