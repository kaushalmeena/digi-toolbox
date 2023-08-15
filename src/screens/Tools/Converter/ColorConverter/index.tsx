"use client"

import UnitConvertPage from "@/components/UnitConvertPage";
import { SelectOptions, UnitMap } from "./constants";
import { convertColor } from "./utils";

export default function ColorConverterPage() {
  return (
    <UnitConvertPage
      heading="Color Converter"
      subHeading="Quickly convert color between HEX, RGB and HSL formats"
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.RGB}
      toDefaultValue={UnitMap.HEX}
      convertFunction={convertColor}
    />
  );
}