"use client";

import UnitConvertPage from "@/components/UnitConvertPage";
import { createConvertFunction } from "@/utils";
import { ConversionMap, SelectOptions, Units } from "./constants";

const convertFunction = createConvertFunction(ConversionMap, Units.SQ_METER);

export default function AreaConverterPage() {
  return (
    <UnitConvertPage
      heading="Area Converter"
      subHeading="Quickly convert area between sq. meter, sq mile, sq. foot etc. etc."
      selectOptions={SelectOptions}
      fromDefaultValue={Units.SQ_KILOMETER}
      toDefaultValue={Units.SQ_METER}
      convertFunction={convertFunction}
    />
  );
}
