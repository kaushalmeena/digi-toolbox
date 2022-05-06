import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { MassSelectOptions, MASS_UNITS } from "./constants";
import { convertMass } from "./utils";

const MassConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Mass Converter"
      subHeading="Quickly convert mass between gram, ounce, pound etc."
      selectOptions={MassSelectOptions}
      fromDefaultValue={MASS_UNITS.KILOGRAM}
      toDefaultValue={MASS_UNITS.GRAM}
      convertFunction={convertMass}
    />
  );
};

export default MassConverter;
