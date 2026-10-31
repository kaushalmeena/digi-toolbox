"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { LENGTH_UNITS } from "./units";

export default function LengthConverter() {
  return <UnitConverter units={LENGTH_UNITS} defaultUnit="km" />;
}
