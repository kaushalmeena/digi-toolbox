"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { AREA_UNITS } from "./units";

export default function AreaConverter() {
  return <UnitConverter units={AREA_UNITS} defaultUnit="m2" />;
}
