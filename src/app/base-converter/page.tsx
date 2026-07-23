import type { Metadata } from "next";
import BaseConverterPage from "@/screens/Tools/Converter/BaseConverter/BaseConverter";

export const metadata: Metadata = {
  title: "Base Converter",
  description:
    "Simple, free and easy to use online tool that converts base between octal, hexadecimal, binary etc."
};

export default function BaseConverter() {
  return <BaseConverterPage />;
}
