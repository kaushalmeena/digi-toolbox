import type { Metadata } from "next";
import LengthConverterPage from "@/screens/Tools/Converter/LengthConverter";

export const metadata: Metadata = {
  title: "Length Converter",
  description:
    "Simple, free and easy to use online tool that converts length between kilometer, foot, yard etc."
};

export default function LengthConverter() {
  return <LengthConverterPage />;
}
