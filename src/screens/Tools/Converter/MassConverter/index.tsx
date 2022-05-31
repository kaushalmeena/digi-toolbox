import React from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { MassSelectOptions, MassUnits } from "./constants";
import { convertMass } from "./utils";

function MassConverter() {
  return (
    <Page
      heading="Mass Converter"
      subHeading="Quickly convert mass between gram, ounce, pound etc."
      selectOptions={MassSelectOptions}
      fromDefaultValue={MassUnits.KILOGRAM}
      toDefaultValue={MassUnits.GRAM}
      convertFunction={convertMass}
    />
  );
}

export default MassConverter;
