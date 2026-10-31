"use client";

import { UnitConverter } from "@/components/tool/unit-converter";

import { DATA_SIZE_UNITS } from "./units";

export default function DataSizeConverter() {
  return <UnitConverter units={DATA_SIZE_UNITS} defaultUnit="mb" />;
}
