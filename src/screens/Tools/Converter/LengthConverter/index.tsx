import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { LengthSelectOptions } from "./constants";
import { convertLength } from "./utils";

const LengthConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Length Converter"
      subHeading="Quickly convert length between kilometer, foot, yard etc."
      selectOptions={LengthSelectOptions}
      fromDefaultValue="km"
      toDefaultValue="m"
      convertFunction={convertLength}
    />
  );
};

export default LengthConverter;
