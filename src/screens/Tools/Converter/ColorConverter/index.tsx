import React, { FunctionComponent } from "react";
import Page from "../../../../shared/Page/UnitConvert";
import { ColorSelectOptions } from "./constants";
import { convertColor } from "./utils";

const ColorConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Color Converter"
      subHeading="Quickly convert color between HEX, RGB and HSL formats"
      selectOptions={ColorSelectOptions}
      fromDefaultValue="rgb"
      toDefaultValue="hex"
      convertFunction={convertColor}
    />
  );
};

export default ColorConverter;
