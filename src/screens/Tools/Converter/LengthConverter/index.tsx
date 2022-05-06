import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { LengthSelectOptions, LENGTH_UNITS } from "./constants";
import { convertLength } from "./utils";

const LengthConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Length Converter"
      subHeading="Quickly convert length between kilometer, foot, yard etc."
      selectOptions={LengthSelectOptions}
      fromDefaultValue={LENGTH_UNITS.KILOMETER}
      toDefaultValue={LENGTH_UNITS.METER}
      convertFunction={convertLength}
    />
  );
};

export default LengthConverter;
