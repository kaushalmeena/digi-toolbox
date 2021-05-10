import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { EnergySelectOptions } from "./constants";
import { convertEnergy } from "./utils";

const EnergyConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Energy Converter"
      subHeading="Quickly convert engrgy between joule, calorie, electronvolt etc."
      selectOptions={EnergySelectOptions}
      fromDefaultValue="kJ"
      toDefaultValue="J"
      convertFunction={convertEnergy}
    />
  );
};

export default EnergyConverter;
