import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { angleSelectOptions } from "./constants";
import { convertAngle } from "./utils";

const AngleConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Angle Converter"
      subHeading="Quickly convert angle between degree, radian, gradian etc."
      selectOptions={angleSelectOptions}
      fromDefaultValue="deg"
      toDefaultValue="rad"
      convertFunction={convertAngle}
    />
  );
};

export default AngleConverter;
