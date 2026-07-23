import type { Metadata } from "next";
import PressureConverterPage from "@/screens/Tools/Converter/PressureConverter/PressureConverter";

export const metadata: Metadata = {
  title: "Pressure Converter",
  description:
    "Simple, free and easy to use online tool that converts pressure between bar, pascal, torr etc."
};

export default function PressureConverter() {
  return <PressureConverterPage />;
}
