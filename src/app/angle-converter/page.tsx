import AngleConverterPage from "@/screens/Tools/Converter/AngleConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Angle Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts Angle between degree, radians, gradian etc."
};

function AngleConverter() {
  return <AngleConverterPage />;
}

export default AngleConverter;
