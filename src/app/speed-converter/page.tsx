import type { Metadata } from "next";
import SpeedConverterPage from "@/screens/Tools/Converter/SpeedConverter/SpeedConverter";

export const metadata: Metadata = {
  title: "Speed Converter",
  description:
    "Simple, free and easy to use online tool that converts speed between kilometer/hour, meter/second, mile/hour etc."
};

export default function SpeedConverter() {
  return <SpeedConverterPage />;
}
