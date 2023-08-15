import MassConverterPage from "@/screens/Tools/Converter/MassConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mass Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts mass between gram, ounce, pound etc."
};

function MassConverter() {
  return <MassConverterPage />;
}

export default MassConverter;
