"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { SelectOptions, Units } from "./constants";
import { convertColor } from "./utils";

export default function ColorConverterPage() {
  return (
    <UnitConvertPage
      heading="Color Converter"
      subHeading="Quickly convert color between HEX, RGB and HSL formats"
      selectOptions={SelectOptions}
      fromDefaultValue={Units.RGB}
      toDefaultValue={Units.HEX}
      convertFunction={convertColor}
    />
  );
}
