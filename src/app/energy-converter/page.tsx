import type { Metadata } from "next";
import EnergyConverterPage from "@/screens/Tools/Converter/EnergyConverter/EnergyConverter";

export const metadata: Metadata = {
  title: "Energy Converter",
  description:
    "Simple, free and easy to use online tool that converts energy joule, calorie, electronvolt etc."
};

export default function EnergyConverter() {
  return <EnergyConverterPage />;
}
