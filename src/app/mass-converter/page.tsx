import MassConverterPage from "@/screens/Tools/Converter/MassConverter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mass Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts mass between gram, ounce, pound etc."
};

export default function MassConverter() {
  return <MassConverterPage />;
}
