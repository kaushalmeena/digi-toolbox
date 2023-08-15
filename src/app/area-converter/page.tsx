import AreaConverterPage from "@/screens/Tools/Converter/AreaConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Area Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts area between sq. meter, sq mile, sq. foot etc."
};

function AreaConverter() {
  return <AreaConverterPage />;
}

export default AreaConverter;
