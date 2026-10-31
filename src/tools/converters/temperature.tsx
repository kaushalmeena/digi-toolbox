"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { TEMPERATURE_UNITS } from "./units";

export default function TemperatureConverter() {
  return <UnitConverter units={TEMPERATURE_UNITS} defaultUnit="c" />;
}
