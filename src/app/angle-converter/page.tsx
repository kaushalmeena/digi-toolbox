import AngleConverterPage from "@/screens/Tools/Converter/AngleConverter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Angle Converter - GetThatTool",
  description:
    "Simple, free and easy to use online tool that converts Angle between degree, radians, gradian etc."
};

export default function AngleConverter() {
  return <AngleConverterPage />;
}
