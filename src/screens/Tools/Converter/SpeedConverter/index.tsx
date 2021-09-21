import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { SpeedSelectOptions } from "./constants";
import { convertSpeed } from "./utils";

const SpeedConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Speed Converter"
      subHeading="Quickly convert speed between kilometer/hour, meter/second, miles/hour etc."
      selectOptions={SpeedSelectOptions}
      fromDefaultValue="km/h"
      toDefaultValue="m/s"
      convertFunction={convertSpeed}
    />
  );
};

export default SpeedConverter;
