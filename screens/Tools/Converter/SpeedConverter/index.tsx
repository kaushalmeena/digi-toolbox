import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { speedSelectOptions } from "./constants";
import { convertSpeed } from "./utils";

const SpeedConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Speed Converter"
      subHeading="Quickly convert speeds between kilometer/hour, meter/second, miles/hour etc."
      selectOptions={speedSelectOptions}
      fromDefaultValue="km/h"
      toDefaultValue="m/s"
      convertFunction={convertSpeed}
    />
  );
};

export default SpeedConverter;
