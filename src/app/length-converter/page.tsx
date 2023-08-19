import LengthConverterPage from "@/screens/Tools/Converter/LengthConverter";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Length Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts length between kilometer, foot, yard etc."
};

export default function LengthConverter() {
  return <LengthConverterPage />;
}