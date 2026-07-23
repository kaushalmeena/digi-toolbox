import type { Metadata } from "next";
import AreaConverterPage from "@/screens/Tools/Converter/AreaConverter/AreaConverter";

export const metadata: Metadata = {
  title: "Area Converter",
  description:
    "Simple, free and easy to use online tool that converts area between sq. meter, sq mile, sq. foot etc."
};

export default function AreaConverter() {
  return <AreaConverterPage />;
}
