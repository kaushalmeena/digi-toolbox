import type { Metadata } from "next";
import AngleConverterPage from "@/screens/Tools/Converter/AngleConverter";

export const metadata: Metadata = {
  title: "Angle Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts Angle between degree, radians, gradian etc."
};

export default function AngleConverter() {
  return <AngleConverterPage />;
}
