import React from "react";
import Page from "../../../../shared/Pages/UnitConvert";
import { SpeedSelectOptions, SpeedUnits } from "./constants";
import { convertSpeed } from "./utils";

function SpeedConverter() {
  return (
    <Page
      heading="Speed Converter"
      subHeading="Quickly convert speed between kilometer/hour, meter/second, miles/hour etc."
      selectOptions={SpeedSelectOptions}
      fromDefaultValue={SpeedUnits.KILOMETERS_PER_HOUR}
      toDefaultValue={SpeedUnits.METERS_PER_SECOND}
      convertFunction={convertSpeed}
    />
  );
}

export default SpeedConverter;
