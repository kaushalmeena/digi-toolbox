"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, UnitMap.JOULE);

export default function EnergyConverterPage() {
  return (
    <UnitConvertPage
      heading="Energy Converter"
      subHeading="Quickly convert energy between joule, calorie, electronvolt etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.KILOJOULE}
      toDefaultValue={UnitMap.JOULE}
      convertFunction={convertFunction}
    />
  );
}
