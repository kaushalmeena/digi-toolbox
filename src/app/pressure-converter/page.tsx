import type { Metadata } from "next";
import PressureConverterPage from "@/screens/Tools/Converter/PressureConverter";

export const metadata: Metadata = {
  title: "Pressure Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts pressure between bar, pascal, torr etc."
};

export default function PressureConverter() {
  return <PressureConverterPage />;
}
