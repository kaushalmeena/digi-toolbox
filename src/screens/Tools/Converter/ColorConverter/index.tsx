import React from "react";
import Page from "../../../../shared/Pages/UnitConvert";
import { ColorSelectOptions, ColorUnits } from "./constants";
import { convertColor } from "./utils";

function ColorConverter() {
  return (
    <Page
      heading="Color Converter"
      subHeading="Quickly convert color between HEX, RGB and HSL formats"
      selectOptions={ColorSelectOptions}
      fromDefaultValue={ColorUnits.RGB}
      toDefaultValue={ColorUnits.HEX}
      convertFunction={convertColor}
    />
  );
}

export default ColorConverter;
