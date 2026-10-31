"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { SPEED_UNITS } from "./units";

export default function SpeedConverter() {
  return <UnitConverter units={SPEED_UNITS} defaultUnit="kmh" />;
}
