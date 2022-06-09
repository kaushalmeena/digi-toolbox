import React from "react";
import Page from "../../../../shared/Pages/UnitConvert";
import { AngleSelectOptions, AngleUnits } from "./constants";
import { convertAngle } from "./utils";

function AngleConverter() {
  return (
    <Page
      heading="Angle Converter"
      subHeading="Quickly convert angle between degree, radian, gradian etc."
      selectOptions={AngleSelectOptions}
      fromDefaultValue={AngleUnits.DEGREE}
      toDefaultValue={AngleUnits.RADIAN}
      convertFunction={convertAngle}
    />
  );
}

export default AngleConverter;
