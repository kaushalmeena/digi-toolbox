import React, { FunctionComponent } from "react";
import Page from "../../../common/Page/UnitConvert";
import { convertColor } from "./utils";

const ColorConverter: FunctionComponent = () => {
  return (
    <Page
      heading="Color Converter"
      subHeading="Quickly convert a colors between HEX, RGB and HSL formats"
      selectOptions={[
        {
          label: "HEX",
          value: "hex"
        },
        {
          label: "RGB",
          value: "rgb"
        },
        {
          label: "HSL",
          value: "hsl"
        }
      ]}
      toDefaultValue="hex"
      fromDefaultValue="rgb"
      convertFunction={convertColor}
    />
  );
};

export default ColorConverter;
