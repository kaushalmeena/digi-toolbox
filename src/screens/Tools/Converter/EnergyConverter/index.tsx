import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { EnergySelectOptions, ENERGY_UNITS } from "./constants";
import { convertEnergy } from "./utils";

const EnergyConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Energy Converter"
      subHeading="Quickly convert engrgy between joule, calorie, electronvolt etc."
      selectOptions={EnergySelectOptions}
      fromDefaultValue={ENERGY_UNITS.KILOJOULE}
      toDefaultValue={ENERGY_UNITS.JOULE}
      convertFunction={convertEnergy}
    />
  );
};

export default EnergyConverter;
