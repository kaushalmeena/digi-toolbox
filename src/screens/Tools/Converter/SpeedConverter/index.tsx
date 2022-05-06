import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { SpeedSelectOptions, SPEED_UNITS } from "./constants";
import { convertSpeed } from "./utils";

const SpeedConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Speed Converter"
      subHeading="Quickly convert speed between kilometer/hour, meter/second, miles/hour etc."
      selectOptions={SpeedSelectOptions}
      fromDefaultValue={SPEED_UNITS.KILOMETERS_PER_HOUR}
      toDefaultValue={SPEED_UNITS.METERS_PER_SECOND}
      convertFunction={convertSpeed}
    />
  );
};

export default SpeedConverter;
