import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { lengthSelectOptions } from "./constants";
import { convertLength } from "./utils";

const LengthConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Length Converter"
      subHeading="Quickly convert length between kilometer, foot, yard etc."
      selectOptions={lengthSelectOptions}
      fromDefaultValue="km"
      toDefaultValue="m"
      convertFunction={convertLength}
    />
  );
};

export default LengthConverter;
