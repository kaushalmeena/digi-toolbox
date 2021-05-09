import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { timeSelectOptions } from "./constants";
import { convertTime } from "./utils";

const TimeConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Time Converter"
      subHeading="Quickly convert time between second, hour, week etc."
      selectOptions={timeSelectOptions}
      fromDefaultValue="s"
      toDefaultValue="ms"
      convertFunction={convertTime}
    />
  );
};

export default TimeConverter;
