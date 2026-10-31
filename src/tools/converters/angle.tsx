"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { ANGLE_UNITS } from "./units";

export default function AngleConverter() {
  return <UnitConverter units={ANGLE_UNITS} defaultUnit="deg" />;
}
