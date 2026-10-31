"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { TIME_UNITS } from "./units";

export default function TimeConverter() {
  return <UnitConverter units={TIME_UNITS} defaultUnit="h" />;
}
