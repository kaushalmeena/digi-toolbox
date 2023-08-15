import SpeedConverterPage from "@/screens/Tools/Converter/SpeedConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Speed Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts speed between kilometer/hour, meter/second, mile/hour etc."
};

function SpeedConverter() {
  return <SpeedConverterPage />;
}

export default SpeedConverter;
