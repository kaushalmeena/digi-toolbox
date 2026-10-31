"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { PRESSURE_UNITS } from "./units";

export default function PressureConverter() {
  return <UnitConverter units={PRESSURE_UNITS} defaultUnit="bar" />;
}
