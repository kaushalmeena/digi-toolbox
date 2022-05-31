import React from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { LengthSelectOptions, LengthUnits } from "./constants";
import { convertLength } from "./utils";

function LengthConverter() {
  return (
    <Page
      heading="Length Converter"
      subHeading="Quickly convert length between kilometer, foot, yard etc."
      selectOptions={LengthSelectOptions}
      fromDefaultValue={LengthUnits.KILOMETER}
      toDefaultValue={LengthUnits.METER}
      convertFunction={convertLength}
    />
  );
}

export default LengthConverter;
