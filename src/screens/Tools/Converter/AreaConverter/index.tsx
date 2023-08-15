"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { ConversionMap, SelectOptions, UnitMap } from "./constants";
import { createConvertFunction } from "@/utils";

const convertFunction = createConvertFunction(ConversionMap, UnitMap.SQ_METER);

export default function AreaConverterPage() {
  return (
    <UnitConvertPage
      heading="Area Converter"
      subHeading="Quickly convert area between sq. meter, sq mile, sq. foot etc. etc."
      selectOptions={SelectOptions}
      fromDefaultValue={UnitMap.SQ_KILOMETER}
      toDefaultValue={UnitMap.SQ_METER}
      convertFunction={convertFunction}
    />
  );
}
