import BaseConverterPage from "@/screens/Tools/Converter/BaseConverter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts base between octal, hexadecimal, binary etc."
};

export default function BaseConverter() {
  return <BaseConverterPage />;
}
