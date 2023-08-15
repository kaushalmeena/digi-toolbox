import ColorConverterPage from "@/screens/Tools/Converter/ColorConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Color Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts color between HEX, RGB and HSL formats."
};

function ColorConverter() {
  return <ColorConverterPage />;
}

export default ColorConverter;
