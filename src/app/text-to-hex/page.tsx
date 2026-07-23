import type { Metadata } from "next";
import TextToHexPage from "@/screens/Tools/Text/TextToHex/TextToHex";

export const metadata: Metadata = {
  title: "Convert Text to Hexadecimal",
  description:
    "Super simple, free and fast browser-based utility for converting text to hexadecimal."
};

export default function TextToHex() {
  return <TextToHexPage />;
}
