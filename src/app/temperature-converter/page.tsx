import TemperatureConverterPage from "@/screens/Tools/Converter/TemperatureConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Temperature Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts temperature between celsius, fahrenheit and kelvin."
};

function TemperatureConverter() {
  return <TemperatureConverterPage />;
}

export default TemperatureConverter;
