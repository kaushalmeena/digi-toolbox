"use client";

import UnitConvertPage from "@/components/UnitConvertPage/UnitConvertPage";
import { createConvertFunction } from "@/utils/unitUtils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, Units.JOULE);

export default function EnergyConverterPage() {
  return (
    <UnitConvertPage
      heading="Energy Converter"
      subHeading="Quickly convert energy between joule, calorie, electronvolt etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.KILOJOULE}
      toDefaultValue={Units.JOULE}
      convertFunction={convertFunction}
    />
  );
}
