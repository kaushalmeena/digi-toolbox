import BaseConverterPage from "@/screens/Tools/Converter/BaseConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Base Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts base between octal, hexadecimal, binary etc."
};

function BaseConverter() {
  return <BaseConverterPage />;
}

export default BaseConverter;
