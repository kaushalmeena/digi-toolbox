"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { ENERGY_UNITS } from "./units";

export default function EnergyConverter() {
  return <UnitConverter units={ENERGY_UNITS} defaultUnit="kj" />;
}
