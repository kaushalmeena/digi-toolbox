import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { energySelectOptions } from "./constants";
import { convertEnergy } from "./utils";

const EnergyConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Energy Converter"
      subHeading="Quickly convert engrgy between joule, calorie, electronvolt etc."
      selectOptions={energySelectOptions}
      fromDefaultValue="kJ"
      toDefaultValue="J"
      convertFunction={convertEnergy}
    />
  );
};

export default EnergyConverter;
