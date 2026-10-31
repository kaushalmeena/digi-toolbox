"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { MASS_UNITS } from "./units";

export default function MassConverter() {
  return <UnitConverter units={MASS_UNITS} defaultUnit="kg" />;
}
