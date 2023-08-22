"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, Units.GRAM);

export default function MassConverterPage() {
  return (
    <UnitConvertPage
      heading="Mass Converter"
      subHeading="Quickly convert mass between gram, ounce, pound etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.KILOGRAM}
      toDefaultValue={Units.GRAM}
      convertFunction={convertFunction}
    />
  );
}
