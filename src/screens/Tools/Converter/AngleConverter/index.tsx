import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { AngleSelectOptions, ANGLE_UNITS } from "./constants";
import { convertAngle } from "./utils";

const AngleConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Angle Converter"
      subHeading="Quickly convert angle between degree, radian, gradian etc."
      selectOptions={AngleSelectOptions}
      fromDefaultValue={ANGLE_UNITS.DEGREE}
      toDefaultValue={ANGLE_UNITS.RADIAN}
      convertFunction={convertAngle}
    />
  );
};

export default AngleConverter;
