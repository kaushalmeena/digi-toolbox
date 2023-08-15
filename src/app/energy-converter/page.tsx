import EnergyConverterPage from "@/screens/Tools/Converter/EnergyConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Energy Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts energy joule, calorie, electronvolt etc."
};

function EnergyConverter() {
  return <EnergyConverterPage />;
}

export default EnergyConverter;
